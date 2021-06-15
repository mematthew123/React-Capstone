import React, { Component } from "react";
import ContactForm from '../ContactForm/ContactForm';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer className="page-footer font-small" id="footer" style={{ background: "linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%) " }}>

                {/* <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div> */}

                <div align="right">
                    <ContactForm />
           
                <div align="center">
                <div>Capstone Team 6 | 2021</div>
                </div>
            </div>

            </footer>
        );
    }
}

export default Footer;

