import React, { Component } from "react";
//import Login from './LoginComponent';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

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

        this.props.parent.login('admin', this.state.password);

        this.props.parent.history.push('/user');

        this.setState({
            email: '',
            password: ''
        });

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


                <nav class="navbar fixed-bottom navbar-light bg-white">
                <a class="navbar-brand" href="#"></a>
                <a href="https://www.capitalone.com/support-center/contact-us/" class="site-footer__link" target="_self" rel="">Contact Us</a>
              </nav>



                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login /Sign up</h5>
                            </div>
                            <div className="modal-body">
                                <div className="form-outline">
                                    <input type="email" id="email" className="form-control" onChange={this.handleChange} />
                                    <label className="form-label" htmlFor="formControlDefault">Email address </label>
                                </div>
                                <div className="form-outline">
                                    <input type="password" id="password" className="form-control" onChange={this.handleChange} />
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