import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, student, ...rest }) => (
    <Route
        {...rest}
        render = {props => student.authenticated === true ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )}
    />
);

PrivateRoute.propTypes = {
    student: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    student: state.student
});

export default connect(mapStateToProps)(PrivateRoute);