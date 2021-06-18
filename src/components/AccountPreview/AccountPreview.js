import React from 'react';
import NumberFormat from 'react-number-format';
import Moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { postDeleteChecking } from '../../Actions/Checking';
import { postDeleteSavings } from '../../Actions/Savings';
import './AccountPreview.css';

function Term({ term }) {

    if (term == null) {
        return (<></>);
    } else {
        return (
            <div className="d-flex" >
                <div>
                    <p>Term</p>
                </div>
                <div className="ml-auto">
                    <p>{term}</p>
                </div>
            </div >
        );
    }
}

function InterestRate({ interestRate }) {

    if (interestRate == null) {
        return (<></>);
    } else {
        return (
            <div className="d-flex" >
                <div>
                    <p>Interest Rate</p>
                </div>
                <div className="ml-auto">
                    <p><NumberFormat
                        value={interestRate * 100}
                        prefix='% '
                        displayType='text' /></p>
                </div>
            </div >
        );
    }
}

function OpenedOn({ date }) {

    Moment.locale('en');

    if (date == null) {
        return (<></>);
    } else {
        return (
            <div className="d-flex" >
                <div>
                    <p>Opened on</p>
                </div>
                <div className="ml-auto">
                    <p>{Moment(date).format('D MMM YYYY')}</p>
                </div>
            </div >
        );
    }
}

function Balance({ balance }) {

    if (balance == null) {
        return (<></>);
    } else {
        return (
            <div className="d-flex card-title" >
                <div>
                    <p>Balance</p>
                </div>
                <div className="ml-auto">
                    <p>${balance}</p>
                </div>
            </div >
        );
    }
}

function AccountPreview({ accounts, type }) {

    const dispatch = useDispatch();
    const jwt = useSelector((state) => state.authenticate.jwt);

    const openAccountDetails = () => {
    }

    const deleteAccount = (account) => {
        if (type == 'Checking') {
            dispatch(postDeleteChecking(jwt, { balance: 0, id: account.id }));
        } else if (type == 'Savings') {
            dispatch(postDeleteSavings(jwt, { balance: 0, id: account.id }));
        }
    }

    const renderAccountPreview = accounts.map((account) => {
        return (
            <li onClick={openAccountDetails} key={account.id}>
                <div className="card">
                    <Balance balance={account.balance} />

                    <div align="center"><hr id="seperator" /></div>

                    <div className="card-body">
                        <InterestRate interestRate={account.interestRate} />
                        <OpenedOn date={account.openedDate} />
                        <Term term={account.term} />
                    </div>

                    <div align="center"><hr id="seperator" /></div>

                    <button className="btn btn-outline-primary" onClick={() => deleteAccount(account)}>Delete Account</button>
                </div>
            </li>
        );
    })

    return (
        <>{renderAccountPreview}</>
    );
}

export default AccountPreview;