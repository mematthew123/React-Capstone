import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header/Header';
import Home from "./Home/Home"
import UserDashboard from './UserDashboard/UserDashboard';
import AdminDashboard from './AdminDashboard';
import { login } from '../Actions/Authentication';
import UserDetails from './UserDetails/UserDetails';

class Main extends Component {

    render() {
        return (
            <>
                <Header />
                <Switch location={this.props.location}>
                    <Route path="/user" component={UserDashboard} />
                    <Route path="/register" component={UserDetails} />
                    <Route path="/admin" component={AdminDashboard} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </>
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