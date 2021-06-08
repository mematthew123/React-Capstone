import React, { Component } from "react";
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { login } from '../Actions/Actions';
import * as ActionTypes from '../Actions/Types';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = { email: '', password: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {

        switch (event.target.type) {
            case 'email':
                this.setState({ email: event.target.value });
                break;
            case 'password':
                this.setState({ password: event.target.value });
                break;
        }

    }

    handleClick(event) {
        event.preventDefault();

        this.props.login('user', 'user')
        .then(result => {
            if (result.type === ActionTypes.LOGIN && result.payload.role === "ROLE_ADMIN") {
                this.props.history.push('/admin');
            } else if (result.type === ActionTypes.LOGIN && result.payload.role === "ROLE_USER") {
                this.props.history.push('/user');
            } else {
                alert("Login Failed - Try different username or password")
            }
        });

        this.setState({ email: '', password: '' });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <NavLink className="nav-link" to="/home">
                        <img src="/MeritBankLogoNew.png" height="80rem" alt="" />
                    </NavLink>
                    <button className="btn btn-outline-primary my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal">Login/Sign Up</button>
                </nav>


                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login / Sign Up</h5>
                            </div>
                            <div className="modal-body">
                                <div className="form-outline">
                                    <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                                    <label className="form-label" htmlFor="formControlDefault">Email address </label>
                                </div>
                                <div className="form-outline">
                                    <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
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
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password))
});

export default withRouter(connect(null, mapDispatchToProps)(Header));