import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        //eslint-disable-next-line
        const instances = M.Sidenav.init(elems, {});
    }, []);

    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <Link to="#" className="sidenav-trigger" data-target="mobile-menu"><span className="mdi mdi-menu mdi-24px menu-icon"></span></Link>
                    <a href="/" className="brand-logo">Logo</a>
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
                <li><Link to="/">Home</Link></li>
                <li className="divider"></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/medical-center">Medical Center</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
        </>
    );
}

export default Header;