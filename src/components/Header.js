import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>JWT: {this.props.Token}</p>
            </div>
        );
    }
}

export default Header;