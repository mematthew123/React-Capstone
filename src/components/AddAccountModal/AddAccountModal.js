import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postAddChecking } from '../../Actions/Checking';
import { DropdownButton, Dropdown } from "react-bootstrap";
import { postSavings } from "../../Actions/Savings";

class AddAccountModal extends Component {

    constructor(props) {
        super(props)

        this.state = { accountType: 'Choose a Type', startingBalance: 0, dba: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox(event) {
        this.setState({ [event.target.id]: !this.state.dba });
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleClick() {
        
        if (this.state.accountType == 'Checking') {
            this.props.addCheckingAccount(this.props.authenticate.jwt, {
                balance: this.state.startingBalance
            });
        } else if (this.state.accountType == 'Savings') {
            this.props.addSavingsAccount(this.props.authenticate.jwt, {
                balance: this.state.startingBalance
            });
        }

        this.setState({ accountType: 'Choose a Type', startingBalance: 0, dba: false });
    }

    handleModalClose() {
        this.setState({ accountType: 'Choose a Type', startingBalance: 0, dba: false });
    }

    render() {
        return (
            <>
                <button data-toggle="modal" data-target="#addAccountModal" id="sidebarButton">New Account</button>

                <div className="modal fade" id="addAccountModal" tabIndex="-1" role="dialog" aria-labelledby="addAccountModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addAccountModalLabel">Add Account</h5>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label className="form-label">Account Type</label>
                                    <DropdownButton id="accountType" title={this.state.accountType}>
                                        <Dropdown.Item id="accountType" as="button" value="Checking" onClick={this.handleChange}>Checking</Dropdown.Item>
                                        <Dropdown.Item id="accountType" as="button" value="Savings" onClick={this.handleChange}>Savings</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="startingBalance">Starting Balance</label>
                                    <input type="number" id="startingBalance" className="form-control" step="0.01" min="0" value={this.state.startingBalance} onChange={this.handleChange} />
                                </div>
                                {this.state.accountType == 'Checking' ?
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="dba" onChange={this.handleCheckbox} />
                                        <label className="form-check-label" htmlFor="dba">
                                            DBA Account
                                        </label>
                                    </div>
                                    : null}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleClick}>Add</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleModalClose}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    authenticate: state.authenticate
});

const mapDispatchToProps = dispatch => ({
    addCheckingAccount: (token, data) => dispatch(postAddChecking(token, data)),
    addSavingsAccount: (token, data) => dispatch(postSavings(token, data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAccountModal));