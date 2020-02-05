import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { logoutStudent } from '../../actions/studentActions';
// import { getStudentProfile } from '../../actions/profileActions';

import DataForm from './DataForm';

class Bio extends Component {
    constructor (props) {
        super(props);
        this.state = {
            student: {}
        };
    }

    componentDidMount () {
        this.setState({
            student: this.props.student
        });
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
                    <Helmet><title>Student Bio - Angels of God Medical Center and Allied Services</title></Helmet>
                </>
                <>
                    <aside>
                        <ul>
                            <li><Link to={`/admissions/students/${student.id}`}>Home</Link></li>
                            <li><Link to={`/admissions/students/${student.id}/bio`} style={{ color: '#dc3545' }}>Update Bio</Link></li>
                            <li><Link to={`/admissions/students/${student.id}/documents`}>Required Documents</Link></li>
                            {/* <li><Link to={`/admissions/students/${student.id}/profile`}>Profile</Link></li> */}
                            <li><Link onClick={this.logout} to="">Log out</Link></li>
                        </ul>
                    </aside>
                    <section className="dashboard-content">
                        <DataForm />
                    </section>
                </>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    student: state.student.student
});

Bio.propTypes = {
    logoutStudent: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logoutStudent })(Bio);