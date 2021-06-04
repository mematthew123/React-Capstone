import React, { Component } from 'react';
import { Route, BrowserRouter as Router, withRouter, Switch, Redirect } from 'react-router-dom';
import UserDashboard from './UserDashboardComponent';
import AdminDashboard from './AdminDashboardComponent';
import Header from './Header';
import { connect } from 'react-redux';
import { login } from '../Actions/Actions';

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <Header parent={this.props} />
                    <Switch location={this.props.location}>
                        <Route path="/user" component={() => <UserDashboard parent={this.props} />} />
                        <Route path="/admin" component={() => <AdminDashboard parent={this.props} />} />
                        <Redirect to="/home" />
                    </Switch>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    JWT: state.JWT,
    errMess: state.errMess
});

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => { dispatch(login(username, password)) }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));