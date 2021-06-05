import React, { Component } from "react";
//import Login from './LoginComponent';
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
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Welcome Back</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">


                                <div class="form-outline">
                                    <input type="text" id="formControlDefault" class="form-control" />
                                    <label class="form-label" for="formControlDefault">Email address </label>
                                </div>


                                <div class="form-outline">
                                    <input type="text" id="formControlDefault" class="form-control" />
                                    <label class="form-label" for="formControlDefault">Password</label>
                                </div>


                                          ...

                                </div>
                            <div className="modal-footer">



                                <button type="button" className="btn btn-primary" data-dismiss="modal">Login</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Nah'</button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Header;




// <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div className="modal-dialog" role="document">
//     <div className="modal-content">
//         <div className="modal-body">



//             <Login parent={this.props.parent} />
//         </div>
//     </div>
// </div>
// </div>