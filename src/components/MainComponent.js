import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import UserDashboard from './UserDashboardComponent';
import Login from './LoginComponent';
import Header from './Header';
import { connect } from 'react-redux';
import { login } from '../Actions/Actions';

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Header Token={this.props.JWT}/>
                    <Route exact path="/" component={() => <Login loginMethod={this.props.login} />} />
                    <Route exact path="/user" component={() => <UserDashboard loginMethod={this.props.login} />} />
                </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);