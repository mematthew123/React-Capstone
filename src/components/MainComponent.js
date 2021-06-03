import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import UserDashboard from './UserDashboardComponent';
import Login from './LoginComponent';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchWeather } from '../Actions/Actions';

class Main extends Component {

    render() {

        return (
            <React.Fragment>
                <Router>
                    <Header search={this.props.fetchWeather}/>
                    <Route exact path="/" component={() => <UserDashboard name={this.props.name} />} />
                </Router>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    weather: state.weather,
    errMess: state.errMess,
    name: "kevin"
});

const mapDispatchToProps = (dispatch) => ({
    fetchWeather: (cityName) => { dispatch(fetchWeather(cityName)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);