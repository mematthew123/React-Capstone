import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Header extends Component {

    handleSearch(values) {
        this.props.search(values.city);
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Header;