import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const breadcrumb = ({ title, link, linkText }) => {
    return (
        <div className="breadcrumb">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link className="active" to={`/${link}`}>{linkText}</Link><span className="mdi mdi-chevron-right chevron-icon breadcrumb-icon"></span></li>
            </ul>
            <h3>{title}</h3>
        </div>
    );
}

breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
};

export default breadcrumb;