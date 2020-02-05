import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { registerStudent } from '../../actions/studentActions';

import '../input-groups/TextInput';
import TextInput from '../input-groups/TextInput';

class Apply extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {}
        };
    }

    UNSAFE_componentWillReceiveProps (nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = this.state;
        const data = { name, email, password, confirmPassword };

        this.props.registerStudent(data, this.props.history);
    };

    render () {
        const { name, email, password, confirmPassword, errors } = this.state;

        return (
            <section>
                <form onSubmit={this.onSubmit} className="apply-form">
                    <p style={{ paddingTop: '20px' }}>Please Fill out the Form below to begin your application process</p>
                    <TextInput
                        label="Enter Full Name"
                        icon="mdi mdi-alphabetical"
                        title="Your name is required"
                        id="name"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                        errorMessage={errors.name}
                    />

                    <TextInput
                        type="email"
                        label="Enter Email Address"
                        icon="mdi mdi-email-outline"
                        info="e.g. john@doe.com"
                        title="Email address is required"
                        id="email"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        errorMessage={errors.email}
                    />

                    <TextInput
                        type="password"
                        label="Enter Password"
                        icon="mdi mdi-lock-outline"
                        info="Password must be at least 8 characters long"
                        title="Password is required"
                        id="password"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        errorMessage={errors.password}
                    />

                    <TextInput
                        type="password"
                        label="Confirm Password"
                        icon="mdi mdi-lock-outline"
                        title="Confirm password is required"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={this.onChange}
                        errorMessage={errors.confirmPassword}
                    />
                    <button className="form-button" type="submit">Create Account</button>
                </form>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
});

Apply.propTypes = {
    registerStudent: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { registerStudent })(withRouter(Apply));