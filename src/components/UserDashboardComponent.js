import React from 'react';

// function sendAuth(props) {
//     console.log("hello");
//     props.loginMethod('admin', 'admin');
//     console.log(props);
// }

class UserDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.sendAuth = this.sendAuth.bind(this);
        this.printProps = this.printProps.bind(this);
    }

    sendAuth() {
        this.props.loginMethod('admin', 'admin');
    }

    printProps() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row" id="userDashboardDiv">
                    <div className="col-3" id="accountDisplayDiv">
                        <button className="btn btn-primary" onClick={this.sendAuth}>Get JWT</button>
                        <button className="btn btn-primary" onClick={this.printProps}>Print Props</button>
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