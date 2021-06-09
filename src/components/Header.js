import React, { Component } from "react";
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { login } from '../Actions/Actions';
import * as ActionTypes from '../Actions/Types';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = { loginUsername: '', loginPassword: '', signUpUsername: '', signUpPassword: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleChange(event) {

        switch (event.target.id) {
            case 'loginUsername':
                this.setState({ loginUsername: event.target.value });
                break;
            case 'loginPassword':
                this.setState({ loginPassword: event.target.value });
                break;
            case 'signUpUsername':
                this.setState({ signUpUsername: event.target.value });
                break;
            case 'signUpPassword':
                this.setState({ signUpPassword: event.target.value });
                break;
        }

    }

    handleClick(event) {
        event.preventDefault();

        this.props.login(this.state.loginUsername, this.state.loginPassword)
            .then(result => {
                if (result.type === ActionTypes.LOGIN && result.payload.role === "ROLE_ADMIN") {
                    this.props.history.push('/admin');
                } else if (result.type === ActionTypes.LOGIN && result.payload.role === "ROLE_USER") {
                    this.props.history.push('/user');
                } else {
                    console.log(result);
                    alert("Login Failed" + result.payload);
                }
            });

        this.setState({ loginUsername: '', loginPassword: '' });
    }

    handleSignUp() {

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <NavLink className="nav-link" to="/home">
                        <img src="/MeritBankLogoNew.png" height="80rem" alt="" />
                    </NavLink>
                    <div style={{ textAlign: "center" }}>
                        <div>
                            <button className="btn btn-outline-primary" style={{width: "7rem", fontSize: "1.4rem"}} data-toggle="modal" data-target="#exampleModal">Login</button>
                        </div>
                        <div>
                            <span className="text-muted" style={{cursor: "pointer"}} data-toggle="modal" data-target="#SignUpModal" onClick={() => this.handleSignUp} >Sign Up</span>
                        </div>
                    </div>
                </nav>


                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
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
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="SignUpModal" tabIndex="-1" role="dialog" aria-labelledby="SignUpModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                            </div>
                            <div className="modal-body">
                                <div className="form-outline">
                                    <input type="text" id="signUpUsername" className="form-control" value={this.state.signUpUsername} onChange={this.handleChange} />
                                    <label className="form-label" htmlFor="formControlDefault">Username</label>
                                </div>
                                <div className="form-outline">
                                    <input type="password" id="signUpPassword" className="form-control" value={this.state.signUpPassword} onChange={this.handleChange} />
                                    <label className="form-label" htmlFor="formControlDefault">Password</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSignUp}>Submit</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password))
});

export default withRouter(connect(null, mapDispatchToProps)(Header));