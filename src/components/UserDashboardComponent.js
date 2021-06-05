import React from 'react';
import AccountPreview from './AccountPreviewComponent';

class UserDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(props) {
        console.log(props);
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
                        <button className="btn btn-light" onClick={() => this.handleClick(this.props)} >Print Props</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDashboard;