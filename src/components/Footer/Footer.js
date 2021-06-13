import React, { Component } from "react";
import ContactForm from '../ContactForm/ContactForm';
// import { connect } from 'react-redux';
// import { NavLink, withRouter } from 'react-router-dom';
// import { login } from '../Actions/Actions';
// import * as ActionTypes from '../Actions/Types';
// import ContactForm from './ContactForm'

class Footer extends Component {

    render() {
        return (
            <footer className="page-footer font-small" style={{ background: "linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%)" }}>

                {/* <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div> */}

                <div align="center">
                    <ContactForm />
                </div>


            </footer>
        );
    }
}

export default Footer;

// class Footer extends Component {

//     constructor(props) {
//         super(props);

//     }

//     handleChange(event) {

//         switch (event.target.type) {

//         }

//     }

//     handleClick(event) {



//     }

//     render() {
//         return (
//             <div>
//             <nav className="navbar fixed-bottom navbar-light bg-white">
//             <button className="btn btn-outline-primary my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal">Login/Sign Up</button>
//                 </nav>


//                 <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="exampleModalLabel">Login / Sign Up</h5>
//                             </div>
//                             <div className="modal-body">
//                                 <div className="form-outline">
//                                     <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
//                                     <label className="form-label" htmlFor="formControlDefault">Email address </label>
//                                 </div>
//                                 <div className="form-outline">
//                                     <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
//                                     <label className="form-label" htmlFor="formControlDefault">Password</label>
//                                 </div>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleClick}>Login</button>
//                                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     login: (, ) => dispatch(login(, ))
// });
// export default Footer;




// // <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
// // <div className="modal-dialog" role="document">
// //     <div className="modal-content">
// //         <div className="modal-body">



// //             <Login parent={this.props.parent} />
// //         </div>
// //     </div>
// // </div>
// // </div>