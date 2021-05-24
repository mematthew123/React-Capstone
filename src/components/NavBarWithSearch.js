import { Component } from "react";
import { Navbar, NavItem, Nav, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';

class Header extends Component {

    handleSearch(values) {
        this.props.search(values.city);
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
                            <NavLink className="nav-link" to="/data">Weather</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar >
                        <LocalForm onSubmit={(values) => this.handleSearch(values)}>
                            <Row>
                                <div className="d-flex">
                                    <div className="ml-auto p-2">
                                        <Col>
                                            <Control.text model=".city" id="city" name="city" placeholder="Enter City" className="form-control" />
                                        </Col>
                                    </div>
                                    <div className="ml-auto p-2">
                                        <Col>
                                            <button type="submit" className="btn btn-outline-success">Submit</button>
                                        </Col>
                                    </div>
                                </div>
                            </Row>
                        </LocalForm>
                    </Nav>
                </div>
            </Navbar>
        );
    }
}

export default Header;