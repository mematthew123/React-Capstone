import React, { Component } from "react";
import ContactForm from '../ContactForm/ContactForm';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer className="page-footer font-small" id="footer" style={{ background: "linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%) " }}>

                <div align="center">
                    <ContactForm />
                    <div>Capstone Team 6 | 2021</div>
                </div>

            </footer>
        );
    }
}

export default Footer;

