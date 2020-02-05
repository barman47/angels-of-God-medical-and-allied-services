import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import axios from 'axios';

import { logoutStudent } from '../../actions/studentActions';

import form from '../../assets/visa-form.pdf';

class Dashboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            student: {},
            hasPaid: false
        };
    }

    componentDidMount () {
        this.setState({
            student: this.props.student
        }, () => {
            axios.get(`/api/students/${this.state.student.id}`)
            .then(res => {
                this.setState({
                    hasPaid: res.data.hasPaid
                });
            })
            .catch(err => console.error(err));
        });
    }

    logout = (e) => {
        e.preventDefault();
        this.props.logoutStudent();
    }

    render () {
        const { student, hasPaid } = this.state;

        return (
            <section className="dashboard">
                <>
                    <Helmet><title>{student.name || `Angels of God Medical Center and Allied Services`} - Angels of God Medical Center and Allied Services</title></Helmet>
                </>
                <>
                    <aside>
                        <ul>
                            <li><Link to={`/admissions/students/${student.id}`} style={{ color: '#dc3545' }}>Home</Link></li>
                            <li><Link to={`/admissions/students/${student.id}/bio`}>Update Bio</Link></li>
                            <li><Link to={`/admissions/students/${student.id}/documents`}>Required Documents</Link></li>
                            {/* <li><Link to={`/admissions/students/${student.id}/profile`}>Profile</Link></li> */}
                            <li><Link onClick={this.logout} to="">Log out</Link></li>
                        </ul>
                    </aside>
                    <section className="dashboard-content">
                        <div className="admission-steps">
                            <h5>Admission Steps</h5>
                            <ol>
                                <li>
                                    Update your Information here <Link to={`/admissions/students/${student.id}/bio`}>here.</Link>
                                </li>
                                <li>Make the required payment to the account details</li>
                                <li>Provide the necessary documents <Link to={`/admissions/students/${student.id}/documents`}>here</Link></li>
                                {hasPaid && <li><a href={form} target="_blank" rel="noopener noreferrer">Download Visa Form</a></li>}
                            </ol>
                            <p>For further inquiries, call any of the following numbers:</p>
                            <p>+2348034335207, +2348036662434, +639458656032, +2347033501199, +447424275204, +639236308027</p>
                        </div>
                    </section>
                </>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    student: state.student.student
});

Dashboard.propTypes = {
    logoutStudent: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logoutStudent })(Dashboard);