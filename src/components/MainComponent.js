import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './HomeComponent';
import Data from './DataComponent';
import Header from './NavBarWithSearch';
import { connect } from 'react-redux';
import { fetchWeather } from '../Actions/Actions';

class Main extends Component {

    render() {

        // console.log(this.props);

        return (
            <React.Fragment>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Merit Bank</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Router>
                    <Header search={this.props.fetchWeather}/>
                    <Route exact path="/" component={() => <Home data={this.props}/>} />
                    <Route path="/Data" component={() => <Data data={this.props} />} />
                </Router>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    weather: state.weather,
    errMess: state.errMess
});

const mapDispatchToProps = (dispatch) => ({
    fetchWeather: (cityName) => { dispatch(fetchWeather(cityName)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);