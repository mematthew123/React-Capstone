import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import Header from './Header';
import { connect } from 'react-redux';
import { login } from '../Actions/Actions';
import Footer from './Footer';

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch location={this.props.location}>
                    <Route path="/user" component={UserDashboard} />
                    <Route path="/admin" component={AdminDashboard} />
                    <Redirect to="/home" />
                </Switch>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    jwt: state.jwt,
    role: state.role,
    errMess: state.errMess
});

const mapDispatchToProps = dispatch => ({
    Login: (username, password) => dispatch(login(username, password))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));