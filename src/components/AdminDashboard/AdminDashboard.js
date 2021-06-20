import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.handleUser = this.handleUser.bind(this);
    }
    
    handleUser() {
        this.props.history.push('/user');
    }

    render() {
        if (this.props.role === "ROLE_ADMIN") {
            return (
                <div>
                    <h1> Welcome Administrator </h1>
                    <button className="btn btn-light" onClick={this.handleUser} >Go To User</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h1> You are NOT and admin </h1>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    jwt: state.authenticate.jwt,
    role: state.authenticate.role
});

export default withRouter(connect(mapStateToProps)(AdminDashboard));