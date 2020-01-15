import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';

const Header = (props) => {
    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        //eslint-disable-next-line
        const instances = M.Sidenav.init(elems, {});

        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach((mobileLink) => {
            mobileLink.addEventListener('click', (e) => {
                setTimeout(instances[0].close(), 1000);
            });
        });
    }, []);

    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <Link to="#" className="sidenav-trigger" data-target="mobile-menu"><span className="mdi mdi-menu mdi-24px menu-icon"></span></Link>
                    <Link to="/" className="brand-logo">
                        <img className="logo" src={logo} alt="Angels of God Medical and Allied Services Logo"/>
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/admissions">Admissions</Link></li>
                        <li><Link to="/medical-center">Medical Center</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                    </ul>
                </div>
            </nav>
            <ul id="mobile-menu" className="sidenav">
                <li><Link to="/" className="mobile-link">Home</Link></li>
                <li className="divider"></li>
                <li><Link to="/admissions" className="mobile-link">Admissions</Link></li>
                <li><Link to="/medical-center" className="mobile-link">Medical Center</Link></li>
                <li><Link to="/about" className="mobile-link">About</Link></li>
                <li><Link to="/services" className="mobile-link">Services</Link></li>
            </ul>
        </div>
    );
}

export default Header;