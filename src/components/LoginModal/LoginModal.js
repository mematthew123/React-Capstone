import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../Actions/Authentication';
import { fetchAccount } from '../../Actions/UserAccount';
import * as ActionTypes from '../../Actions/Types';


class LoginModal extends Component {

    constructor(props) {
        super(props);

        this.state = { loginUsername: '', loginPassword: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleModalClose() {
        this.setState({ loginUsername: '', loginPassword: '' });
    }

    handleClick() {

        this.props.login(this.state.loginUsername, this.state.loginPassword)
            .then(result => {
                if (result.type === ActionTypes.LOGIN && result.payload.role === "ROLE_ADMIN") {
                    this.props.history.push('/admin');
                } else if (result.type === ActionTypes.LOGIN && result.payload.role === "ROLE_USER") {
                    this.props.fetchAccount(result.payload.jwt)
                    .then(this.props.history.push('/user'));
                } else {
                    alert("Login Failed: " + result.payload);
                }
            });

        this.setState({ loginUsername: '', loginPassword: '' });
    }

    render() {
        return (
            <>
                <button className="btn btn-outline-primary" style={{ width: "7rem", fontSize: "1.4rem" }} data-toggle="modal" data-target="#loginModal" data-backdrop="static">Login</button>

                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="loginModalLabel">Login</h5>
                            </div>
                            <div className="modal-body">
                                <div className="form-outline">
                                    <input type="text" id="loginUsername" className="form-control" value={this.state.loginUsername} onChange={this.handleChange} />
                                    <label className="form-label" htmlFor="formControlDefault">Username</label>
                                </div>
                                <div className="form-outline">
                                    <input type="password" id="loginPassword" className="form-control" value={this.state.loginPassword} onChange={this.handleChange} />
                                    <label className="form-label" htmlFor="formControlDefault">Password</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleClick}>Login</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleModalClose}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password)),
    fetchAccount: (token) => dispatch(fetchAccount(token))
});

export default withRouter(connect(null, mapDispatchToProps)(LoginModal));