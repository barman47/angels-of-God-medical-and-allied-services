import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import PropTypes from 'prop-types';

import { getStudentProfile} from '../../actions/adminActions';

class ViewStudent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            student: {},
            profile: {}
        };
    }

    componentDidMount () {
        if (this.props.student.student === null) {
            this.props.history.push('/admin/dashboard');
        } else {
            this.setState({
                student: this.props.student.student
            }, () => {
                this.props.getStudentProfile(this.state.student.id);
            });
        }
    }

    static getDerivedStateFromProps (props) {
        if (props.profile) {
            return {
                profile: props.profile
            };
        }
        return null;
    }

    render() {
        const { profile, student } = this.state;
        const { education, referees } = this.state.profile;

        let schools, refereeInformation;

        if (education) {
            schools = education.map((school, index) => (
                <div key={index} className="school-info">
                    <p>School Name: <span className="content">{school.school}</span></p>
                    <div>
                        <p>Date Completed: <span className="content">{moment(school.date).format('Do MMMM, YYYY')}</span></p>
                        <p>Attained Qualification: <span className="content">{school.qualification}</span></p>
                    </div>
                </div>
            ));
        }
        if (referees) {
            refereeInformation = referees.map((referee, index) => (
                <div key={index} className="referee-info">
                    <p>Referee Name: <span className="content">{referee.name}</span></p>
                    <p>Address: <span className="content">{referee.address}</span></p>
                    <p>Phone Number: <span className="content">{referee.phone}</span></p>
                    <p>Occupation: <span className="content">{referee.occupation}</span></p>
                </div>
            ));
        }

        return (
            <>
                <><Helmet><title>{`${student.name}`} - Angels of God Medical Center and Allied Services</title></Helmet></>
                <section className="student-profile">
                    <div className="profile-section">
                        <h5>Student Information</h5>
                        <div className="student-data">
                            <p>Name: <span className="content">{student.name}</span></p>
                            <p>Email Address: <span className="content">{student.email}</span></p>
                        </div>
                        <div className="student-data">
                            <p>Date of Birth: <span className="content">{moment(profile.dateOfBirth).format('Do MMMM, YYYY')}</span></p>
                            <p>Place of Birth: <span className="content">{profile.placeOfBirth}</span></p>
                        </div>
                        <div className="student-data">
                            <p>Gender: <span className="content">{profile.sex}</span></p>
                            <p>Marital Status: <span className="content">{profile.maritalStatus}</span></p>
                        </div>
                        <div className="student-data">
                            <p>State of Origin: <span className="content">{profile.stateOfOrigin}</span></p>
                            <p>Local Government Area: <span className="content">{profile.lga}</span></p>
                        </div>
                        <div className="student-data">
                            <p>Home Town: <span className="content">{profile.homeTown}</span></p>
                            <p>Nationality: <span className="content">{profile.nationality}</span></p>
                        </div>
                        <div className="student-data">
                            <p>Home Address: <span className="content">{profile.homeAddress}</span></p>
                            <p>Religion: <span className="content">{profile.religion}</span></p>
                        </div>
                        <div className="student-data">
                            <p>Contact Address: <span className="content">{profile.contactAddress}</span></p>
                            <p>Postal Address: <span className="content">{profile.postalAddress}</span></p>
                        </div>
                        <div className="student-data">
                            <p>Phone Number: <span className="content">{profile.phone}</span></p>
                            <p>Next of Kin: <span className="content">{profile.nextOfKin}</span></p>
                        </div>

                        <div className="student-data">
                            <p>Next of Kin Phone Number: <span className="content">{profile.nextOfKinPhone}</span></p>
                            <p>Next of Kin: <span className="content">{profile.nextOfKin}</span></p>
                        </div>
                    </div>
                    <div className="school-section">
                        <h5>Schools Attended</h5>
                        {schools}
                    </div>
                    <div className="referee-section">
                        <h5>Referee Information</h5>
                        {refereeInformation}
                    </div>
                </section>
            </>
        )
    }
}

ViewStudent.propTypes = {
    getStudentProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    profile: state.profile,
    student: state.student
});

export default connect(mapStateToProps, { getStudentProfile })(ViewStudent);