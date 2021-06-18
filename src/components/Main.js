import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header/Header';
import Home from "./Home/Home"
import UserDashboard from './UserDashboard/UserDashboard';
import AdminDashboard from './AdminDashboard';
import { login } from '../Actions/Authentication';
import SideBar from './SideBar/SideBar';

class Main extends Component {

    render() {
        return (
            <>
                <Header />
                <Switch location={this.props.location}>
                    <Route path="/user" component={UserDashboard} />
                    <Route path="/admin" component={AdminDashboard} />
                    <Route path="/sidebar" component={SideBar} />
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