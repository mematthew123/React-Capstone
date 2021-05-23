import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './HomeComponent';
import Data from './DataComponent';
import Header from './NavBarWithSearch';

class Main extends Component {

    render() {

        return (
            <>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Get The Weather</h1>
                                <p>Pick a City</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Router>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/Data" component={Data} />
                </Router>
            </>
        );
    }
}

export default Main;