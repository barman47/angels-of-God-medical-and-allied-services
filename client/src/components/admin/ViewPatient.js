import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import isEmpty from '../../validation/is-empty';

class ViewPatient extends Component {
    constructor (props) {
        super(props);
        this.state = {
            patient: {}
        };
    }

    componentDidMount () {
        if (isEmpty(this.props.patients.patient)) {
            this.props.history.push('/admin/booking');
        } else {
            this.setState({
                patient: this.props.patients.patient
            });
        }
    }

    render() {
        const { patient } = this.state;

        return (
            <>
                <><Helmet><title>{`${patient.name}`} - Angels of God Medical Center and Allied Services</title></Helmet></>
                <section className="student-profile">
                    <div className="profile-section">
                        <h5>Patient Information</h5>
                        <div className="student-data">
                            <p>Name: <span className="content">{patient.name}</span></p>
                            <p>Age: <span className="content">{patient.age}</span></p>
                        </div>
                        <div className="student-data">
                            <p>Gender: <span className="content">{patient.gender}</span></p>
                            <p>Occupation: <span className="content">{patient.occupation}</span></p>
                        </div>
                        <div className="student-data">
                            <p>Marital Status: <span className="content">{patient.maritalStatus}</span></p>
                            <p>Highest Level of Education: <span className="content">{patient.education}</span></p>
                        </div>
                        <div className="student-data">
                            <p>Address: <span className="content">{patient.address}</span></p>
                            <p>State of Origin: <span className="content">{patient.stateOfOrigin}</span></p>
                        </div>
                        <div className="student-data">
                            <p>Local Government Area: <span className="content">{patient.lga}</span></p>
                            <p>Religion: <span className="content">{patient.religion}</span></p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    patients: state.patients
});

export default connect(mapStateToProps)(ViewPatient);