import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as ActionTypes from '../../Actions/Types';
import SignUpModal from '../SignUpModal/SignUpModal';
import LoginModal from '../LoginModal/LoginModal';
import './Header.css';

function handleLogout(props) {
    props.dispatch(deleteToken());
    props.history.push('/');
}

function deleteToken() {
    return {
        type: ActionTypes.LOGIN,
        payload: { jwt: '', role: '' }
    }
}

function handleDashboard(props) {
    props.history.push('/user');
}

function LoginView(props) {

    if (props.parent.authenticate.jwt == '') {
        return (
            <>
                <div><LoginModal /></div>
                <div><SignUpModal /></div>
            </>
        );
    }
    return (
        <>
            <div><button className="btn btn-outline-primary" style={{ width: "7rem", fontSize: "1.4rem" }} onClick={() => handleLogout(props.parent)}>Logout</button></div>
            <div><span className="text-muted" style={{ cursor: "pointer", display: "block", textAlign: "center" }} onClick={() => handleDashboard(props.parent)}>Dashboard</span></div>
        </>
    );
}

class Header extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <NavLink className="nav-link" to="/">
                        <img src="/MeritBankLogoNew.png" height="80rem" alt="" />
                    </NavLink>
                    <div>
                        <LoginView parent={this.props} />
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authenticate: state.authenticate
});

export default withRouter(connect(mapStateToProps)(Header));