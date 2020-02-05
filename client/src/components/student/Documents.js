import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { logoutStudent } from '../../actions/studentActions';

class Documents extends Component {
    constructor (props) {
        super(props);
        this.state = {
            student: this.props.student.student
        };
    }

    logout = (e) => {
        e.preventDefault();
        this.props.logoutStudent();
    }

    render () {
        const { student } = this.state;
        return (
            <section className="dashboard">
                <>
                    <Helmet><title>Upload Documents - Angels of God Medical Center and Allied Services</title></Helmet>
                </>
                <>
                    <aside>
                        <ul>
                            <li><Link to={`/admissions/students/${student.id}`}>Home</Link></li>
                            <li><Link to={`/admissions/students/${student.id}/bio`}>Update Bio</Link></li>
                            <li><Link to={`/admissions/students/${student.id}/documents`} style={{ color: '#dc3545' }}>Required Documents</Link></li>
                            {/* <li><Link to={`/admissions/students/${student.id}/profile`}>Profile</Link></li> */}
                            <li><Link onClick={this.logout} to="">Log out</Link></li>
                        </ul>
                    </aside>
                    <section className="dashboard-content">
                        <div className="required-documents">
                            <h5 className="header">The Following Documents are required to process your application</h5>

                            <ul>
                                <li><span className="mdi mdi-checkbox-marked-outline"></span>Official Transcript of Records with Red Ribbon (3 copies)</li>
                                <li><span className="mdi mdi-checkbox-marked-outline"></span>Police Clearance</li>
                                <li><span className="mdi mdi-checkbox-marked-outline"></span>Affidavit of Support with Bank Statement</li>
                                <li><span className="mdi mdi-checkbox-marked-outline"></span>Photocopy of the pages of your passport</li>
                                <li><span className="mdi mdi-checkbox-marked-outline"></span>Personal History Statement</li>
                                <li><span className="mdi mdi-checkbox-marked-outline"></span>Quarantine Medical Examination Results</li>
                            </ul>
                        </div>
                    </section>
                </>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    student: state.student,
    errors: state.errors
});

Documents.propTypes = {
    logoutStudent: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logoutStudent })(Documents);