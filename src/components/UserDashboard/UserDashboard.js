import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AccountPreview from '../AccountPreview/AccountPreview';
import UserDetails from '../UserDetails/UserDetails';
import './UserDashboard.css';

class UserDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleAdmin = this.handleAdmin.bind(this);
    }

    handleClick() {
        console.log(this.props);
    }

    handleAdmin() {
        this.props.history.push('/admin');
    }

    render() {
        if (this.props.account.account == null && this.props.authenticate.jwt == '') {
            return (
                <div className="d-flex align-items-center justify-content-center" style={{ height: '90vh' }}>
                    <h1>You must be logged in to reach this page.</h1>
                </div>
            );
        } else if (this.props.account.account == null && this.props.authenticate.jwt != '') {
            return (
                <UserDetails />
            );
        } else {
            return (
                <div className="container-fluid">
                    <div className="row" id="userDashboardDiv">
                        <div className="col-3" id="accountDisplayDiv">
                            <AccountPreview />
                            <AccountPreview />
                            <AccountPreview />
                        </div>
                        <div className="col-9" id="userDisplayDiv">
                            <h1 id="welcomeMessege">Welcome {this.props.account.account.firstName}</h1>
                            <button className="btn btn-light" onClick={this.handleClick}>Print Props</button>
                            <button className="btn btn-light" onClick={this.handleAdmin}>Go To Admin</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    account: state.account,
    authenticate: state.authenticate
});

export default withRouter(connect(mapStateToProps)(UserDashboard));