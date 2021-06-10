import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUp } from '../../Actions/Authentication';

class SignUpModal extends Component {

    constructor(props) {
        super(props);

        this.state = { signUpUsername: '', signUpPassword: '', signUpValid: false, signUpInvalid: false, signUpMessage: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSignUp() {
        this.setState({ signUpInvalid: false, signUpValid: false });

        this.props.signUp(this.state.signUpUsername, this.state.signUpPassword)
            .then(result => {
                if (result.ok) {
                    this.setState({ signUpValid: true, signUpMessage: 'SUCCESS - User has been created' });
                } else {
                    this.setState({ signUpInvalid: true, signUpMessage: 'FAILIED - Username already exsists' })
                }
            });
    }

    handleModalClose() {
        this.setState({ signUpUsername: '', signUpPassword: '', signUpInvalid: false, signUpValid: false });
    }

    render() {

        const MyModal = () => {
            if (this.state.signUpValid) {
                return (<div className="alert alert-success" style={{ padding: ".5rem", margin: "0rem" }}>{this.state.signUpMessage}</div>);
            } else if (this.state.signUpInvalid) {
                return (<div className="alert alert-danger" style={{ padding: ".5rem", margin: "0rem" }}>{this.state.signUpMessage}</div>);
            } else {
                return (<div></div>);
            }
        }

        return (
            <>
                <span className="text-muted" style={{ cursor: "pointer", display: "block", textAlign: "center" }} data-toggle="modal" data-target="#signUpModal" data-backdrop="static">Sign Up</span>

                <div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="signUpModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="signUpModalLabel">Sign Up</h5>
                            </div>
                            <div className="modal-body">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="formControlDefault"><span className="glyphicon glyphicon-user">Username</span></label>
                                    <input type="text" id="signUpUsername" className="form-control" value={this.state.signUpUsername} onChange={this.handleChange} />
                                </div>
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="formControlDefault">Password</label>
                                    <input type="password" id="signUpPassword" className="form-control" value={this.state.signUpPassword} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="modal-footer justify-content-between">
                                <div>
                                    <MyModal />
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary" onClick={this.handleSignUp}>Submit</button>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleModalClose}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUp: (username, password) => signUp(username, password)
});

export default withRouter(connect(null, mapDispatchToProps)(SignUpModal));