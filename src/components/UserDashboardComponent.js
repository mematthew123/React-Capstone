import React from 'react';
import AccountPreview from './AccountPreviewComponent';

class UserDashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row" id="userDashboardDiv">
                    <div className="col-3" id="accountDisplayDiv">
                        <AccountPreview parent={this.props.parent}/>
                        <AccountPreview parent={this.props.parent}/>
                        <AccountPreview parent={this.props.parent}/>
                    </div>
                    <div className="col-9" id="userDisplayDiv">
                        <h1 id="welcomMessege">Welcome To Merit</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDashboard;