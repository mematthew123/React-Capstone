import React, { Component } from "react";
import ContactForm from '../ContactForm/ContactForm';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer className="page-footer font-small">

                <div align="center">
                    <ContactForm />
                </div>

            </footer>
        );
    }
}

export default Footer;

