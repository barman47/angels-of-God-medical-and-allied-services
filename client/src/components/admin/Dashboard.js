import React, { Component }  from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

import { logoutAdmin } from '../../actions/adminActions';
import { getStudents, togglePayment, viewStudent } from '../../actions/studentActions';
import isEmpty from '../../validation/is-empty';

class Dashboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            students: [],
            admin: {}
        };
    }

    componentDidMount () {
        this.setState({
            admin: this.props.admin
        });
        this.props.getStudents();
    }

    static getDerivedStateFromProps (props) {
        if (props.student.students) {
            return {
                students: props.student.students
            };
        }
        return null;
    }

    togglePayment = (id) => {
        this.props.togglePayment(id);
    }

    viewStudent = (student) => {
        this.props.viewStudent(student, this.props.history);
    }

    logout = (e) => {
        e.preventDefault();
        this.props.logoutAdmin();
    }

    render () {
        const { students } = this.state;
        let studentsToDisplay;

        if (!isEmpty(students)) {
            studentsToDisplay = students.map((student, index) => (
                <tr key={index + 1}>
                    <td style={{ cursor: 'pointer' }} onClick={() => this.viewStudent(student)}>{student.name || <Skeleton />}</td>
                    <td>{student.email || <Skeleton />}</td>
                    <td>
                        <label>
                            <input 
                                type="checkbox" 
                                className="filled-in payment-state" 
                                defaultChecked={student.hasPaid}
                                onChange={() => this.togglePayment(student.id)}
                            />
                            <span></span>
                        </label>
                    </td>
                </tr>
            ));
        }

        return (
            <section className="dashboard">
                <>
                    <Helmet><title>Admin Dashboard - Angels of God Medical Center and Allied Services</title></Helmet>
                </>
                <>
                    <aside style={{ height: '30%' }}>
                        <ul>
                            <li><Link to="/admin/students" style={{ color: '#dc3545' }}>Students</Link></li>
                            <li><Link to="/admin/booking">Doctor's Appointments</Link></li>
                            <li><Link to="/admin/profile">Profile</Link></li>
                            <li><Link onClick={this.logout} to="">Log out</Link></li>
                        </ul>
                    </aside>
                    <section className="dashboard-content">
                        <div className="admin-section">
                            <h3>Students Application List</h3>
                            {students ? ( 
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>Has Paid</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {studentsToDisplay}
                                    </tbody>
                                </table>
                            )
                             : 
                                (
                                    <div className="no-students">
                                        <h1>No Students Application</h1>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                </>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    admin: state.admin,
    student: state.student
});

Dashboard.propTypes = {
    getStudents: PropTypes.func.isRequired,
    logoutAdmin: PropTypes.func.isRequired,
    togglePayment: PropTypes.func.isRequired,
    viewStudent: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getStudents, logoutAdmin, togglePayment, viewStudent })(withRouter(Dashboard));