import React, { Component } from "react";
import ContactForm from '../ContactForm/ContactForm';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer className="page-footer font-small" id="footer">

                <div align="center">
                    <ContactForm />
                    <div>Capstone Team 6 | 2021</div>
                </div>

            </footer>
        );
    }
}

export default Footer;

