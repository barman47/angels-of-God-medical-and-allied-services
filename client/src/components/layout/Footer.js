import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer>
            <p>Copyright &copy; {new Date().getFullYear()} - Angels of God Medical Center and Allied Services</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/medical-center">Medical Center</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;