import React from 'react';
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
                    <p>{interestRate}</p>
                </div>
            </div >
        );
    }
}

function OpenedOn({ date }) {

    if (date == null) {
        return (<></>);
    } else {
        return (
            <div className="d-flex" >
                <div>
                    <p>Opened on</p>
                </div>
                <div className="ml-auto">
                    <p>{date}</p>
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
                    <h2>{balance}</h2>
                </div>
            </div >
        );
    }
}

function AccountPreview({accounts}) {

    // React.useEffect(() => { console.log(props); }, []);

    console.log(accounts);

    return (
        <div></div>
        // <div className="card">
        //     <Balance balance={props.balance} />

        //     <div align="center"><hr style={{ borderTop: '1px solid black', width: '95%', margin: '0' }} /></div>

        //     <div className="card-body">
        //         <InterestRate interestRate={props.interestRate} />
        //         <OpenedOn date={props.date} />
        //         <Term term={props.term} />
        //     </div>
        // </div>
    );
}

export default AccountPreview;