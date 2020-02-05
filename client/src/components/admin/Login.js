import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginAdmin } from '../../actions/adminActions';

import TextInput from '../input-groups/TextInput';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    // componentDidUpdate
    useEffect(() => {
        const { errors } = props;
        // const { errors, history, admin } = props;
        if (errors) {
            setErrors(props.errors);
        }

        // if (admin.admin) {
        //     history.push('/');
        // }
    }, [props]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const admin = {
            email,
            password
        };

        props.loginAdmin(admin, props.history);
    };

    return (
        <>
            <Helmet><title>Admin Login - Angels of God Medical Center and Allied Services</title></Helmet>
            <div className="login">
                <form onSubmit={handleFormSubmit} className="login-form" noValidate>
                    <h3>Admin Login</h3>
                    <TextInput
                        type="email"
                        id="email"
                        label="Enter Email Address"
                        icon="mdi mdi-email-outline"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        errorMessage={errors.email}
                    />
                    <TextInput
                        type="password"
                        id="password"
                        label="Enter Password"
                        icon="mdi mdi-lock-outline"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        errorMessage={errors.password}
                    />
                    <div className="col s12 input-field">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </>
    );
};

Login.propTypes = {
    loginAdmin: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    errors: state.errors
});

export default connect(mapStateToProps, { loginAdmin })(withRouter(Login));