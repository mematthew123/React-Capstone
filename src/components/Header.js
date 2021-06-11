import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import SignUpModal from './SignUpModal/SignUpModal';
import LoginModal from './LoginModal/LoginModal';


class Header extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <NavLink className="nav-link" to="/">
                        <img src="/MeritBankLogoNew.png" height="80rem" alt="" />
                    </NavLink>
                    <div>
                        <div>
                            <LoginModal />
                        </div>
                        <div>
                            <SignUpModal />
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;