import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AccountPreview from './AccountPreview';

class UserDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleAdmin = this.handleAdmin.bind(this);
    }

    handleClick() {
        console.log(this.props.jwt);
        console.log(this.props.role);
    }

    handleAdmin() {
        this.props.history.push('/admin');
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row" id="userDashboardDiv">
                    <div className="col-3" id="accountDisplayDiv">
                        <AccountPreview />
                        <AccountPreview />
                        <AccountPreview />
                    </div>
                    <div className="col-9" id="userDisplayDiv">
                        <h1 id="welcomMessege">Welcome To Merit</h1>
                        <button className="btn btn-light" onClick={this.handleClick} >Print Props</button>
                        <button className="btn btn-light" onClick={this.handleAdmin} >Go To Admin</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    jwt: state.jwt,
    role: state.role
});

export default withRouter(connect(mapStateToProps)(UserDashboard));