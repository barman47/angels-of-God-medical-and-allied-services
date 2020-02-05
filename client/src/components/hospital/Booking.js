import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { booking } from '../../actions/patientActions';

import ProfileTextInput from '../input-groups/ProfileTextInput';
import StateOfOriginInput from '../input-groups/StateOfOriginInput';

const Booking = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [occupation, setOccupation] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [education, setEducation] = useState('');
    const [address, setAddress] = useState('');
    const [stateOfOrigin, setStateOfOrigin] = useState('');
    const [lga, setLga] = useState('');
    const [religion, setReligion] = useState('');
    const [reason, setReason] = useState('');

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const elems2 = document.querySelectorAll('select');
        // eslint-disable-next-line
        const instances2 = M.FormSelect.init(elems2, {});
    }, []);

    useEffect(() => {
        if (props.errors) {
            setErrors(props.errors);
        }
    }, [props.errors]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            age,
            gender,
            occupation,
            maritalStatus,
            education,
            address,
            stateOfOrigin,
            lga,
            religion,
            reason
        };
        props.booking(data, props.history);
    }
    return (
        <>
            <Helmet>
                <title>Patient Booking - Angels of God Medical Center</title>
            </Helmet>
            <div className="login">
                <form onSubmit={handleFormSubmit} className="login-form" noValidate>
                    <h3>Doctor Appointment Booking</h3>
                    <ProfileTextInput
                        id="name"
                        label="Enter Name"
                        name="name"
                        title="Name is required"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        errorMessage={errors.name}
                    />
                    <ProfileTextInput
                        type="number"
                        id="age"
                        label="Enter Age"
                        name="age"
                        title="Age is required"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        errorMessage={errors.age}
                    />
                    <div className="input-field profile-input">
                        <p>Select your Gender:</p><br />
                        <p>
                            <label htmlFor="male">
                                <input 
                                    type="radio" 
                                    id="male" 
                                    className="with-gap validate" 
                                    name="gender"
                                    value="male"
                                    title="Gender is required"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <span>Male</span>
                            </label>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            <label htmlFor="female">
                                <input 
                                    type="radio"
                                    id="female" 
                                    className="with-gap validate" 
                                    name="gender" 
                                    value="female"
                                    title="Gender is required"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <span>Female</span>
                            </label>
                        </p>
                        {errors.gender ? (<span className="helper-text invalid-text">{errors.gender}</span>) : null}
                    </div>
                    <ProfileTextInput
                        id="occupation"
                        label="Enter Occupation"
                        name="occupation"
                        title="Occupation is required"
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                        errorMessage={errors.occupation}
                    />
                    <div className="input-field profile-input">
                        <p>Marital Status:</p><br />
                        <p>
                            <label htmlFor="single">
                                <input 
                                    type="radio" 
                                    id="single" 
                                    className="with-gap validate" 
                                    name="maritalStatus"
                                    value="single"
                                    title="Marital Status is required"
                                    onChange={(e) => setMaritalStatus(e.target.value)}
                                />
                                <span>Single</span>
                            </label>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            <label htmlFor="married">
                                <input 
                                    type="radio" 
                                    id="married" 
                                    className="with-gap validate" 
                                    name="maritalStatus"
                                    value="married"
                                    title="Marital Status is required"
                                    onChange={(e) => setMaritalStatus(e.target.value)}
                                />
                                <span>Married</span>
                            </label>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            <label htmlFor="divorced">
                                <input 
                                    type="radio" 
                                    id="divorced" 
                                    className="with-gap validate" 
                                    name="maritalStatus"
                                    value="divorced"
                                    title="Marital Status is required"
                                    onChange={(e) => setMaritalStatus(e.target.value)}
                                />
                                <span>Divorced</span>
                            </label>
                        </p>
                        {errors.maritalStatus ? (<span className="helper-text invalid-text">{errors.maritalStatus}</span>) : null}
                    </div>
                    <ProfileTextInput
                        id="education"
                        label="Enter Highest Level of Education"
                        name="education"
                        title="Highest level of education is required"
                        value={education}
                        info="E.g. S.S.C.E."
                        onChange={(e) => setEducation(e.target.value)}
                        errorMessage={errors.education}
                    />
                    <div className="input-field profile-input">
                        <textarea 
                            className="materialize-textarea validate"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        >
                        </textarea>
                        <label htmlFor="address">Residential Address</label>
                        {errors.address ? <span className="helper-text invalid-text">{errors.address}</span> : null}
                    </div>
                    <StateOfOriginInput 
                        value={stateOfOrigin}
                        onChange={(e) => setStateOfOrigin(e.target.value)}
                        errorMessage={errors.stateOfOrigin}
                    />
                    <ProfileTextInput
                        id="lga"
                        label="Enter Local Government Area"
                        name="lga"
                        title="Local Government Area is required"
                        value={lga}
                        onChange={(e) => setLga(e.target.value)}
                        errorMessage={errors.lga}
                    />
                    <div className="input-field profile-input">
                        <p>Religion:</p><br />
                        <p>
                            <label htmlFor="christianity">
                                <input 
                                    type="radio" 
                                    id="christianity" 
                                    className="with-gap validate" 
                                    name="religion"
                                    value="christianity"
                                    title="Religion is required"
                                    onChange={(e) => setReligion(e.target.value)}
                                />
                                <span>Christianity</span>
                            </label>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            <label htmlFor="islam">
                                <input 
                                    type="radio" 
                                    id="islam" 
                                    className="with-gap validate" 
                                    name="religion"
                                    value="islam"
                                    title="Religion is required"
                                    onChange={(e) => setReligion(e.target.value)}
                                />
                                <span>Islam</span>
                            </label>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            <label htmlFor="others">
                                <input 
                                    type="radio" 
                                    id="others" 
                                    className="with-gap validate" 
                                    name="religion"
                                    value="others"
                                    title="Religion is required"
                                    onChange={(e) => setReligion(e.target.value)}
                                />
                                <span>Others</span>
                            </label>
                            {errors.religion ? (<span className="helper-text invalid-text">{errors.religion}</span>) : null}
                        </p>
                    </div>
                    <div className="input-field profile-input">
                        <textarea 
                            className="materialize-textarea validate"
                            id="reason"
                            name="reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        >
                        </textarea>
                        <label htmlFor="reason">Reason for Appointment</label>
                        {errors.reason ? <span className="helper-text invalid-text">{errors.reason}</span> : null}
                    </div>
                    <div className="col s12 input-field">
                        <button type="submit">Book Appointment</button>
                    </div>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    errors: state.errors
});

Booking.propTypes = {
    booking: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { booking })(withRouter(Booking));