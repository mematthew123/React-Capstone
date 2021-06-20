import React, { Component } from "react";
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { withRouter } from 'react-router-dom';
import { postAddChecking } from '../../Actions/Checking';
import { DropdownButton, Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { postAddSavings } from "../../Actions/Savings";

class AddAccountModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            accountType: 'Choose a Type',
            startingBalance: 0,
            dba: false,
            CD_ID: 0,
            IRA_Type: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleCDClick = this.handleCDClick.bind(this);
    }

    handleCheckbox(event) {
        this.setState({ [event.target.id]: !this.state.dba });
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleCDClick({ target }) {
        this.setState({ CD_ID: target.id });
    }

    handleClick() {

        if (this.state.accountType == 'Checking') {
            this.props.addCheckingAccount(this.props.jwt, {
                balance: this.state.startingBalance
            });
        } else if (this.state.accountType == 'Savings') {
            this.props.addSavingsAccount(this.props.jwt, {
                balance: this.state.startingBalance
            });
        } else {
            console.log(this.state);
        }

        this.setState({ accountType: 'Choose a Type', startingBalance: 0, dba: false, CD_ID: 0, IRA_Type: '' });
    }

    handleModalClose() {
        this.setState({ accountType: 'Choose a Type', startingBalance: 0, dba: false });
    }

    render() {

        const cdOfferings = this.props.cdOfferings.map((account) =>
            <Button key={account.id} id={account.id} style={{ margin: '.2rem', borderRadius: '.25rem' }}>
                Certificate Of Deposit: ID#{account.id} term: {account.term} Interest Rate: <NumberFormat value={account.interestRate * 100} prefix='% ' displayType='text' />
            </Button>
        );

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
                                        <Dropdown.Item id="accountType" as="button" value="Certificate Of Deposit" onClick={this.handleChange}>Certificate Of Deposit</Dropdown.Item>
                                        <Dropdown.Item id="accountType" as="button" value="Individual Retirement Account" onClick={this.handleChange}>Individual Retirement Account</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="startingBalance">Starting Balance</label>
                                    <input type="number" id="startingBalance" className="form-control" step="0.01" min="0" value={this.state.startingBalance} onChange={this.handleChange} />
                                </div>

                                {this.state.accountType == 'Certificate Of Deposit' ?
                                    <ButtonGroup vertical onClickCapture={this.handleCDClick}>
                                        <p>Selected Account: ID# {this.state.CD_ID}</p>
                                        {cdOfferings}
                                    </ButtonGroup>
                                    : null}

                                {this.state.accountType == 'Checking' ?
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="dba" onChange={this.handleCheckbox} />
                                        <label className="form-check-label" htmlFor="dba">DBA Account</label>
                                    </div>
                                    : null}

                                {this.state.accountType == 'Individual Retirement Account' ?
                                    <div className="container" style={{ padding: '0 .5rem'}}>
                                        <div>
                                            <input type="radio" id="IRA_Type" name="IRA_Type" value="regular" style={{ margin: '.25rem' }} onChange={this.handleChange} />
                                            <label>Regular IRA</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="IRA_Type" name="IRA_Type" value="rollover" style={{ margin: '.25rem' }} onChange={this.handleChange} />
                                            <label>Rollover IRA</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="IRA_Type" name="IRA_Type" value="roth" style={{ margin: '.25rem' }} onChange={this.handleChange} />
                                            <label>Roth IRA</label>
                                        </div>
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
    jwt: state.authenticate.jwt,
    cdOfferings: state.cdOfferings.offerings
});

const mapDispatchToProps = dispatch => ({
    addCheckingAccount: (token, data) => dispatch(postAddChecking(token, data)),
    addSavingsAccount: (token, data) => dispatch(postAddSavings(token, data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAccountModal));