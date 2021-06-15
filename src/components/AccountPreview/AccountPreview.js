import React from 'react';
import './AccountPreview.css';
import NumberFormat from 'react-number-format';
import Moment from 'moment';

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
                    <h2>Balance</h2>
                </div>
                <div className="ml-auto">
                    <h2>${balance}</h2>
                </div>
            </div >
        );
    }
}

function AccountPreview({ accounts }) {

    const renderAccountPreview = accounts.map((accounts) => {
        return (
            <div className="card">
                <Balance balance={accounts.balance} />

                <div align="center"><hr style={{ borderTop: '1px solid black', width: '95%', margin: '0' }} /></div>

                <div className="card-body">
                    <InterestRate interestRate={accounts.interestRate} />
                    <OpenedOn date={accounts.openedDate} />
                    <Term term={accounts.term} />
                </div>
            </div>
        );
    })

    return (
        <>{renderAccountPreview}</>
    );
}

export default AccountPreview;