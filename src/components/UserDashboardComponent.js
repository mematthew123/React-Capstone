import React from 'react';

function UserDashboard(props) {

    return (
        <div className="container-fluid">
            <div className="row" id="userDashboardDiv">
                <div className="col-3" id="accountDisplayDiv">

                </div>
                <div className="col-9" id="userDisplayDiv">
                    <h1 id="welcomMessege">Welcome {props.name}</h1>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;