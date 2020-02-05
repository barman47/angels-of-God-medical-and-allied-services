import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { changePassword, logoutAdmin } from '../../actions/adminActions';

import isEqual from '../../utils/isEqual';
import isEmpty from '../../validation/is-empty';

import ProfileTextInput from '../input-groups/ProfileTextInput';


class AdminProfile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            errors: {},
            admin: {}
        };
        this.form = React.createRef();
    }

    componentDidMount () {
        const admin = this.props.admin;

        this.setState({
            email: admin.email,
            admin: this.props.admin
        });
    }

    UNSAFE_componentWillReceiveProps (nextProps, prevState) {
        const { admin, errors } = nextProps;
        
        const oldAdmin = {
            email: prevState.email
        };

        const newAdmin = {
            email: admin.email,
        };
        
        if (isEqual(oldAdmin, newAdmin)) {
            this.setState({
                name: admin.admin.name,
                email: admin.admin.email,
                errors: {}
            });
        }

        if (isEmpty(errors)) {
            this.setState({ 
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
                errors: {} 
            }, () => this.form.current.reset());
        } else {
            this.setState({
                errors
            });
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { currentPassword, newPassword, confirmPassword } = this.state;
        const adminData = {
            currentPassword : currentPassword ? currentPassword : undefined,
            newPassword,
            confirmPassword
        };
        this.props.changePassword(adminData);
    }

    logout = (e) => {
        e.preventDefault();
        this.props.logoutAdmin();
    }

    render () {
        const { errors, email, currentPassword, newPassword, confirmPassword } = this.state;

        return (
            <section className="dashboard">
                <>
                    <Helmet><title>Profile - Angels of God Medical Center and Allied Services</title></Helmet>
                </>
                <>
                    <aside style={{ height: '30%' }}>
                        <ul>
                            <li><Link to="/admin/students">Students</Link></li>
                            <li><Link to="/admin/booking">Doctor's Appointments</Link></li>
                            <li><Link to="/admin/profile" style={{ color: '#dc3545' }}>Profile</Link></li>
                            <li><Link onClick={this.logout} to="">Log out</Link></li>
                        </ul>
                    </aside>
                    <section className="dashboard-content">
                        <h5 className="profile-form-header">Admin Information</h5>
                        <form ref={this.form} onSubmit={this.handleFormSubmit}>
                            <ProfileTextInput
                                type="email"
                                placeholder="Email Address"
                                id="email"
                                name="email"
                                value={email}
                                icon="mdi mdi-account"
                                errorMessage={errors.email}
                                onChange={this.onChange}
                                disabled={true}
                            />
                            <ProfileTextInput
                                type="password"
                                placeholder="Current Password"
                                id="currentPassword"
                                name="currentPassword"
                                value={currentPassword}
                                icon="mdi mdi-account"
                                errorMessage={errors.currentPassword}
                                onChange={this.onChange}
                            />

                            <ProfileTextInput
                                type="password"
                                placeholder="New Password"
                                id="newPassword"
                                name="newPassword"
                                value={newPassword}
                                icon="mdi mdi-account"
                                errorMessage={errors.newPassword}
                                onChange={this.onChange}
                            />
                            <ProfileTextInput
                                type="password"
                                placeholder="Confirm Password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                icon="mdi mdi-account"
                                errorMessage={errors.confirmPassword}
                                onChange={this.onChange}
                            />
                                <button 
                                    className="save-profile"
                                >
                                    Save Changes
                                </button>
                        </form>
                    </section>
                </>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    admin: state.admin
});

AdminProfile.propTypes = {
    changePassword: PropTypes.func.isRequired,
    logoutAdmin: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { changePassword, logoutAdmin })(AdminProfile);