import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postAccount } from '../../Actions/Account';
import * as ActionTypes from '../../Actions/Types'
import './UserDetails.css';


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
        })
            .then(result => {
                if (result.type == ActionTypes.ACCOUNTHOLDER) {
                    this.props.history.push('/user');
                }
            });
    }

    render() {
        return (

            <div className="d-flex register">
                <div className="col-md-5">
                    <div className="register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Welcome</h3>
                        <p>Please fill out the form to take control of your finances today!</p>
                    </div>
                </div>

                <div className="col-md-7">
                    <h3 className="register-heading">Registration</h3>

                    <form onSubmit={this.handleSubmit}>
                        <div className="row register-form">
                            <div className="col">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="First Name *" id="firstName" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Middle Name *" id="middleName" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Last Name *" id="lastName" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <input type="" className="form-control" placeholder="Social Security Number *" pattern="\d{3}-?\d{2}-?\d{4}" id="ssn" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email *" id="email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" minLength="10" maxLength="10" name="phone" className="form-control" placeholder="Your Phone *" id="phone" />
                                </div>
                                <input type="submit" className="btn btn-primary btnRegister" value="Register" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authenticate: state.authenticate
});

const mapDispatchToProps = dispatch => ({
    register: (token, data) => dispatch(postAccount(token, data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails));