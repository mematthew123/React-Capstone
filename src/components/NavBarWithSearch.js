import { Component } from "react";
import { Navbar, NavItem, Nav, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';

class Header extends Component {

    constructor(props) {
        super(props);


    }

    handleSearch(values) {
        console.log(values);
    }

    render() {
        return (
            <Navbar expand="md">
                <div className="container">
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/data">Data</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar className="ml-auto">
                        <LocalForm onSubmit={(values) => this.handleSearch(values)}>
                            <Row className="m-1">
                                <Col>
                                    <Control.text model=".city" id="city" name="city" placeholder="Enter City" className="form-control" />
                                </Col>
                                <Col>
                                    <button type="submit" className="btn btn-outline-success">Submit</button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </Nav>
                </div>
            </Navbar>
        );
    }
}

export default Header;