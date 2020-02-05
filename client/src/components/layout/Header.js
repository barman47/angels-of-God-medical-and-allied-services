import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../assets/img/logo.png';

const Header = (props) => {
    const [student, setStudent] = useState({});
    const [admin, setAdmin] = useState({});

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

    useEffect(() => {
        if (props.student) {
            setStudent(props.student.student);
        } else {
            setStudent({});
        }

        if (props.admin) {
            setAdmin(props.admin);
        } else {
            setAdmin({});
        }
    }, [props.student, props.admin]);

    let links;

    const studentLinks = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/medical-center">Medical Center</Link></li>
            {student && (<li><Link to={`/admissions/students/${student.id}`}>Dashboard</Link></li>)}
            <li><Link to="/about">About</Link></li>
        </>
    );

    const adminLinks = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/medical-center">Medical Center</Link></li>
            {admin && (<li><Link to="/admin/dashboard">Admin</Link></li>)}
            <li><Link to="/about">About</Link></li>
        </>
    );

    const guestLinks = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/medical-center">Medical Center</Link></li>
            <li><Link to="/admissions/login">Student Login</Link></li>
            <li><Link to="/about">About</Link></li>
        </>
    );

    if ((props.student.authenticated)) {
        links = studentLinks;
    } else if (props.admin !== null) {
        links = adminLinks;
    } else {
        links = guestLinks;
    }

    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <Link to="#" className="sidenav-trigger" data-target="mobile-menu"><span className="mdi mdi-menu mdi-24px menu-icon"></span></Link>
                    <Link to="/" className="brand-logo">
                        <img className="logo" src={logo} alt="Angels of God Medical and Allied Services Logo"/>
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {links}
                    </ul>
                </div>
            </nav>
            <ul id="mobile-menu" className="sidenav">
                <li><Link to="/" className="mobile-link">Home</Link></li>
                <li className="divider"></li>
                <li><Link to="/admissions" className="mobile-link">Admissions</Link></li>
                <li><Link to="/medical-center" className="mobile-link">Medical Center</Link></li>
                {props.student.authenticated ? (<li><Link className="mobile-link" to={`/admissions/students/${student.id}`}>Dashboard</Link></li>) : null}
                {props.admin !== null ? (<li><Link className="mobile-link" to="/admin/dashboard">Admin</Link></li>) : null}
                <li><Link to="/about" className="mobile-link">About</Link></li>
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    admin: state.admin,
    student: state.student
});

export default connect(mapStateToProps)(withRouter(Header));