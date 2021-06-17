import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AccountPreview from '../AccountPreview/AccountPreview';
import AddAccountModal from '../AddAccountModal/AddAccountModal';
import UserDetails from '../UserDetails/UserDetails';
import SideBar from '../SideBar/SideBar';
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
        } else if (this.props.account.account != null && this.props.authenticate.jwt != '') {

            return (

                <div className="container-flex">
                    <div className="row" id="userDashboardDiv">

                        <div className="col-2">
                            <SideBar />
                        </div>


                        {/* <div className="col-3" id="accountDisplayDiv">
                            <div>
                                <label>Checking Accounts</label>
                                <AccountPreview accounts={this.props.account.account.checkingAccounts} />
                            </div>

                            <div>
                                <label>Savings Accounts</label>
                                <AccountPreview accounts={this.props.account.account.savingsAccounts} />
                            </div>

                            <div style={{ position: 'absolute', bottom: '0' }}>
                                <AddAccountModal />
                            </div>
                        </div> */}


                        <div className="col-10" id="userDisplayDiv">
                            <h1 id="welcomeMessege">Welcome {this.props.account.account.firstName}</h1>
                            <button className="btn btn-light" onClick={this.handlePrintProps}>Print Props</button>
                            <div>

                                <h3>How may we asisst you?</h3>
                                <div className="input-group" id="dropselect">
                                    <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option selected>Choose...</option>
                                        <option value="1">Deposit to Account</option>
                                        <option value="2">Widthdraw from Account</option>
                                        <option value="3">Transfer between Accounts</option>
                                    </select>
                                    <button className="btn btn-outline-secondary" type="button">Button</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            );
        } else if (this.props.account.account == null && this.props.authenticate.jwt != '') {
            return (
                <UserDetails />
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