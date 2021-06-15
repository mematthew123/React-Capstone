import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postChecking } from '../../Actions/Checking';
import AccountPreview from '../AccountPreview/AccountPreview';
import UserDetails from '../UserDetails/UserDetails';
import './UserDashboard.css';

class UserDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.handlePrintProps = this.handlePrintProps.bind(this);
        this.handleAddCheckingAccount = this.handleAddCheckingAccount.bind(this);
    }

    handlePrintProps() {
        console.log(this.props);
    }

    handleAddCheckingAccount() {

        this.props.addCheckingAccount(this.props.authenticate.jwt, {
            balance: 1000
        });
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
        } else if (this.props.account.account != null && this.props.authenticate.jwt != '') {

            return (
                <div className="container-fluid">
                    <div className="row" id="userDashboardDiv">
                        <div className="col-3" id="accountDisplayDiv">
                            <AccountPreview accounts={this.props.account.account.checkingAccounts} />
                        </div>
                        <div className="col-9" id="userDisplayDiv">
                            <h1 id="welcomeMessege">Welcome {this.props.account.account.firstName}</h1>
                            <button className="btn btn-light" onClick={this.handlePrintProps}>Print Props</button>
                            <button className="btn btn-light" onClick={this.handleAddCheckingAccount}>Add Checking Account</button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}




const mapStateToProps = state => ({
    account: state.account,
    authenticate: state.authenticate
});

const mapDispatchToProps = dispatch => ({
    addCheckingAccount: (token, data) => dispatch(postChecking(token, data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDashboard));