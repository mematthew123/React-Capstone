import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postAccount } from '../../Actions/Account';


class UserDetails extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        values.preventDefault();

        this.props.register(this.props.authenticate.jwt, {
            firstName: values.target.firstName.value,
            middleName: values.target.middleName.value,
            lastName: values.target.lastName.value,
            ssn: values.target.ssn.value,
            email: values.target.email.value,
            phone: values.target.phone.value
        });

        // create handle click 
        // add fetch post to add account holder
    }

    render() {
        return (


            <div>
                <span className="form-group" data-toggle="modal" data-target="#UserDetails" data-backdrop="static"></span>

                <h3>Register</h3>

                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="First name" id="firstName" />
                    </div>

                    <div className="form-group">
                        <label>Middle Name</label>
                        <input type="text" className="form-control" placeholder="Middle name" id="middleName" />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last name" id="lastName" />
                    </div>

                    <div className="form-group">
                        <label>Social Security</label>
                        <input type="text" className="form-control" placeholder="Social Security" id="ssn" />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" placeholder="Phone Number" id="phone" />
                    </div>


                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" />
                    </div>

                    {/* <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div> */}

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Open Checking Account</label>
                    </div>

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" htmlFor="customCheck2">Open Savings Account</label>
                    </div>


                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                        <label className="custom-control-label" htmlFor="customCheck3">Open CD account</label>
                    </div>


                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck4" />
                        <label className="custom-control-label" htmlFor="customCheck4">Open IRA Account</label>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>

                    <p className="forgot-password text-right">
                        Already registered <a href="#">log in?</a>
                    </p>

                </form>

            </div>

        );

    }

} 

const mapStateToProps = state => ({
    account: state.account,
    authenticate: state.authenticate
});

const mapDispatchToProps = dispatch => ({
    register: (token, data) => dispatch(postAccount(token, data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails));




