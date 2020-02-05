import React, { Component }  from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

import { logoutAdmin } from '../../actions/adminActions';
import { getPatients, toggleHasVisited, viewPatient } from '../../actions/patientActions';
import isEmpty from '../../validation/is-empty';

class Bookings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            patients: [],
            patient: {}
        };
    }

    componentDidMount () {
        this.props.getPatients();
    }

    static getDerivedStateFromProps (props) {
        if (props.patients.patients) {
            return {
                patients: props.patients.patients
            };
        }
        return null;
    }

    viewPatient = (patient) => {
        this.props.viewPatient(patient, this.props.history);
    }

    toggleVisited = (id) => {
        this.props.toggleHasVisited(id);
    }

    logout = (e) => {
        e.preventDefault();
        this.props.logoutAdmin();
    }

    render () {
        const { patients } = this.state;
        let patientsToDisplay;

        if (!isEmpty(patients)) {
            patientsToDisplay = patients.map((patient, index) => (
                <tr key={index + 1}>
                    <td title="View Patient Information" style={{ cursor: 'pointer' }} onClick={() => this.viewPatient(patient)}>{patient.name || <Skeleton />}</td>
                    <td>{patient.age || <Skeleton />}</td>
                    <td>{patient.gender || <Skeleton />}</td>
                    <td>{patient.occupation || <Skeleton />}</td>
                    <td>
                        <label>
                            <input 
                                title="Mark as visited"
                                type="checkbox" 
                                className="filled-in payment-state" 
                                defaultChecked={patient.hasVisited}
                                onChange={() => this.toggleVisited(patient._id)}
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
                    <Helmet><title>Patient Bookings - Angels of God Medical Center and Allied Services</title></Helmet>
                </>
                <>
                    <aside style={{ height: '30%' }}>
                        <ul>
                            <li><Link to="/admin/students">Students</Link></li>
                            <li><Link to="/admin/booking" style={{ color: '#dc3545' }}>Doctor's Appointments</Link></li>
                            <li><Link to="/admin/profile">Profile</Link></li>
                            <li><Link onClick={this.logout} to="">Log out</Link></li>
                        </ul>
                    </aside>
                    <section className="dashboard-content">
                        <div className="admin-section">
                            <h3>Patient Bookings</h3>
                            {patients ? ( 
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Name</td>
                                            <td>Age</td>
                                            <td>Gender</td>
                                            <td>Occupation</td>
                                            <td>Has Visited</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {patientsToDisplay}
                                    </tbody>
                                </table>
                            )
                             : 
                                (
                                    <div className="no-patients">
                                        <h1>No Patients Application</h1>
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
    patients: state.patients
});

Bookings.propTypes = {
    getPatients: PropTypes.func.isRequired,
    logoutAdmin: PropTypes.func.isRequired,
    toggleHasVisited: PropTypes.func.isRequired,
    viewPatient: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getPatients, logoutAdmin, toggleHasVisited, viewPatient })(withRouter(Bookings));