import React, { Component } from "react";
import Login from './LoginComponent';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <NavLink className="nav-link" to="/home">
                        <img src="/MeritBankLogoNew.png" height="80rem" alt="" />
                    </NavLink>
                    <button className="btn btn-outline-primary my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal">Login</button>
                </nav>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <Login parent={this.props.parent} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;