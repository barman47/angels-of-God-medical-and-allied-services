import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { changePassword, logoutStudent, updateStudentData } from '../../actions/studentActions';

import isEqual from '../../utils/isEqual';
import capitalize from '../../utils/capitalize';
import isEmpty from '../../validation/is-empty';

import ProfileTextInput from '../input-groups/ProfileTextInput';


class StudentProfile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            errors: {},
            student: {}
        };
        this.form = React.createRef();
    }

    componentDidMount () {
        const student = this.props.student;

        this.setState({
            name: student.name,
            email: student.email,
            student: this.props.student
        });
    }

    UNSAFE_componentWillReceiveProps (nextProps, prevState) {
        const { student, errors } = nextProps;
        
        const oldStudent = {
            name: prevState.name,
            email: prevState.email
        };

        const newStudent = {
            name: student.name,
            email: student.email,
        };
        
        if (isEqual(oldStudent, newStudent)) {
            this.setState({
                student: student.student,
                name: student.student.name,
                email: student.student.email,
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
        const { name, email, currentPassword, newPassword, confirmPassword } = this.state;
        const studentData = {
            name,
            email,
            currentPassword : currentPassword ? currentPassword : undefined,
            newPassword,
            confirmPassword
        };

        if (studentData.currentPassword === undefined) {
            // update student data
            this.props.updateStudentData(studentData);
        } else {
            // change password
            this.props.changePassword(studentData);
        }
    }

    logout = (e) => {
        e.preventDefault();
        this.props.logoutStudent();
    }

    render () {
        const { errors, name, email, currentPassword, newPassword, confirmPassword, student } = this.state;

        return (
            <section className="dashboard">
                <>
                    <Helmet><title>Profile - Angels of God Medical Center and Allied Services</title></Helmet>
                </>
                <>
                    <aside>
                        <ul>
                            <li><Link to={`/admissions/students/${student.id}`}>Home</Link></li>
                            <li><Link to={`/admissions/students/${student.id}/bio`}>Update Profile</Link></li>
                            <li><Link to={`/admissions/students/${student.id}/documents`}>Required Documents</Link></li>
                            <li><Link to={`/admissions/students/${student.id}/profile`} style={{ color: '#dc3545' }}>Profile</Link></li>
                            <li><Link onClick={this.logout} to="">Log out</Link></li>
                        </ul>
                    </aside>
                    <section className="dashboard-content">
                        <h5 className="profile-form-header">Personal Information</h5>
                        <form ref={this.form} onSubmit={this.handleFormSubmit}>
                            <ProfileTextInput 
                                placeholder="Enter Name"
                                id="name"
                                name="name"
                                value={capitalize(name)}
                                icon="mdi mdi-account"
                                errorMessage={errors.name}
                                onChange={this.onChange}
                            />
                            <ProfileTextInput
                                type="email"
                                placeholder="Email Address"
                                id="email"
                                name="email"
                                value={email}
                                icon="mdi mdi-account"
                                errorMessage={errors.email}
                                onChange={this.onChange}
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
    student: state.student.student
});

StudentProfile.propTypes = {
    changePassword: PropTypes.func.isRequired,
    logoutStudent: PropTypes.func.isRequired,
    updateStudentData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { changePassword, logoutStudent, updateStudentData })(StudentProfile);