import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postChecking } from '../../Actions/Checking';
import AccountPreview from '../AccountPreview/AccountPreview';
import AddAccountModal from '../AddAccountModal/AddAccountModal';
import UserDetails from '../UserDetails/UserDetails';
import './UserDashboard.css';



class UserDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.handlePrintProps = this.handlePrintProps.bind(this);
    }

    handlePrintProps() {
        console.log(this.props);
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
                            <div style={{ position: 'absolute', bottom: '0' }}>
                                <AddAccountModal />
                            </div>
                        </div>
                        <div className="col-9" id="userDisplayDiv">
                            <h1 id="welcomeMessege">Welcome {this.props.account.account.firstName}</h1>
                            <button className="btn btn-light" onClick={this.handlePrintProps}>Print Props</button>
                            <div>
<<<<<<< HEAD

                                <h3 id="Assist" >How may we asisst you?</h3>
                                <div className="input-group" id="dropselect">
                                    <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <button className="btn btn-outline-secondary" type="button">Button</button>
                                </div>
=======
                
                            <h3 id= "Assist" >How may we asisst you?</h3>
                            <div className="input-group" id="dropselect">
                            <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                            <option selected>I want too...</option>
                            <option value="1">Make a Transfer</option>
                            <option value="2">View Checking Account</option>
                            <option value="3">View Savings Account</option>
                            </select>
                            <button class="btn btn-outline-secondary" type="button">Button</button>
>>>>>>> 47e492cf1730c1f8df15158beab5898230734b1c
                            </div>
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

export default withRouter(connect(mapStateToProps)(UserDashboard));