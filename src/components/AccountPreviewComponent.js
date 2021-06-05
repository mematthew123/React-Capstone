import React from 'react';

function AccountPreview(props) {

    // React.useEffect(() => { console.log(props); }, []);

    return (
        <div className="card">
            <div className="card-title" style={{margin: "0rem"}}>
                <h3>Account</h3>
            </div>
            <hr />
            <div className="card-body">
                <p>Some accoutn Info</p>
            </div>
        </div>
    );
}

export default AccountPreview;