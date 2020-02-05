import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import moment from 'moment';
import isEmpty from '../../validation/is-empty';

import { getStudentProfile, setStudentProfile } from '../../actions/profileActions';

import ProfileTextInput from '../input-groups/ProfileTextInput';
import StateOfOriginInput from '../input-groups/StateOfOriginInput';

class DataForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            dateOfBirth: '',
            placeOfBirth: '',
            sex: '',
            maritalStatus: '',
            stateOfOrigin: '',
            homeTown: '',
            lga: '',
            nationality: 'Nigerian',
            religion: '',
            homeAddress: '',
            contactAddress: '',
            postalAddress: '',
            phone: '',
            nextOfKin: '',
            nextOfKinPhone: '',

            firstSchoolName: '',
            firstSchoolDate: '',
            firstSchoolQualification: '',

            secondSchoolName: '',
            secondSchoolDate: '',
            secondSchoolQualification: '',

            thirdSchoolName: '',
            thirdSchoolDate: '',
            thirdSchoolQualification: '',

            fourthSchoolName: '',
            fourthSchoolDate: '',
            fourthSchoolQualification: '',

            fifthSchoolName: '',
            fifthSchoolDate: '',
            fifthSchoolQualification: '',

            firstRefereeName: '',
            firstRefereeAddress: '',
            firstRefereePhone: '',
            firstRefereeOccupation: '',

            secondRefereeName: '',
            secondRefereeAddress: '',
            secondRefereePhone: '',
            secondRefereeOccupation: '',

            thirdRefereeName: '',
            thirdRefereeAddress: '',
            thirdRefereePhone: '',
            thirdRefereeOccupation: '',

            student: this.props.student.student, 
            profile: {},
            errors: {}
        };
    }

    componentDidMount () {
        this.props.getStudentProfile(this.state.student.id);
        const elems = document.querySelectorAll('.datepicker');
        // eslint-disable-next-line
        const instances = M.Datepicker.init(elems, {
            format: 'dddd dd mmmm, yyyy',
            i18n: {
                months: ['January', 'February', 'March', 'April', 'May', 'June',' July', 'August', 'September', 'October', 'November', 'December'],
                weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            },
            // maxDate: new Date()
            // yearRange: 40
        });
        const elems2 = document.querySelectorAll('select');
        // eslint-disable-next-line
        const instances2 = M.FormSelect.init(elems2, {});
    }

    UNSAFE_componentWillReceiveProps (nextProps) {
        if (nextProps.profile) {
            this.setState({
                profile: nextProps.profile
            });
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidUpdate () {
        const elems2 = document.querySelectorAll('select');
        // eslint-disable-next-line
        const instances2 = M.FormSelect.init(elems2, {});
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleDateChange = (e) => {
        console.log('date changed');
        this.setState({
            dateOfBirth: document.getElementById('dateOfBirth').value
        });
    }

    setStudentProfile = () => {
        const elems = document.querySelectorAll('.datepicker');
        // eslint-disable-next-line
        const instances = M.Datepicker.init(elems, {
            format: 'dddd dd mmmm, yyyy',
            i18n: {
                months: ['January', 'February', 'March', 'April', 'May', 'June',' July', 'August', 'September', 'October', 'November', 'December'],
                weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            },
            // maxDate: new Date()
            // yearRange: 40
        });
        const elems2 = document.querySelectorAll('select');
        // eslint-disable-next-line
        const instances2 = M.FormSelect.init(elems2, {});
        
        const { profile } = this.state;
        const { education, referees } = this.state.profile;

        this.setState({
            // dateOfBirth: moment(profile.dateOfBirth).format('MM-D-YYYY'),
            placeOfBirth: profile.placeOfBirth,
            sex: profile.sex,
            maritalStatus: profile.maritalStatus,
            stateOfOrigin: profile.stateOfOrigin,
            homeTown: profile.homeTown,
            lga: profile.lga,
            nationality: profile.nationality,
            religion: profile.religion,
            homeAddress: profile.homeAddress,
            contactAddress: profile.contactAddress,
            postalAddress: profile.postalAddress,
            phone: profile.phone,
            nextOfKin: profile.nextOfKin,
            nextOfKinPhone: profile.nextOfKinPhone,

            firstSchoolName: education[0].school,
            firstSchoolDate: education[0].date,
            firstSchoolQualification: education[0].qualification,

            secondSchoolName: education[1].school,
            secondSchoolDate: education[1].date,
            secondSchoolQualification: education[1].qualification,

            thirdSchoolName: education[2].school,
            thirdSchoolDate: education[2].date,
            thirdSchoolQualification: education[2].qualification,

            fourthSchoolName: education[3].school,
            fourthSchoolDate: education[3].date,
            fourthSchoolQualification: education[3].qualification,

            fifthSchoolName: education[4].school,
            fifthSchoolDate: education[4].date,
            fifthSchoolQualification: education[4].qualification,

            firstRefereeName: referees[0].name,
            firstRefereeAddress: referees[0].address,
            firstRefereePhone: referees[0].phone,
            firstRefereeOccupation: referees[0].occupation,

            secondRefereeName: referees[1].name,
            secondRefereeAddress: referees[1].address,
            secondRefereePhone: referees[1].phone,
            secondRefereeOccupation: referees[1].occupation,

            thirdRefereeName: referees[2].name,
            thirdRefereeAddress: referees[2].address,
            thirdRefereePhone: referees[2].phone,
            thirdRefereeOccupation: referees[2].occupation
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { state} = this;
        const data = {
            dateOfBirth: state.dateOfBirth,
            placeOfBirth: state.placeOfBirth,
            sex: state.sex,
            maritalStatus: state.maritalStatus,
            homeTown: state.homeTown,
            lga: state.lga,
            stateOfOrigin: state.stateOfOrigin,
            nationality: state.nationality,
            religion: state.religion,
            homeAddress: state.homeAddress,
            contactAddress: state.contactAddress,
            postalAddress: state.postalAddress,
            phone: state.phone,
            nextOfKin: state.nextOfKin,
            nextOfKinPhone: state.nextOfKinPhone,
         
            firstSchoolName: state.firstSchoolName,
            firstSchoolDate: state.firstSchoolDate,
            firstSchoolQualification: state.firstSchoolQualification,
        
            secondSchoolName: state.secondSchoolName,
            secondSchoolDate: state.secondSchoolDate,
            secondSchoolQualification: state.secondSchoolQualification,
        
            thirdSchoolName: state.thirdSchoolName,
            thirdSchoolDate: state.thirdSchoolDate,
            thirdSchoolQualification: state.thirdSchoolQualification,
        
            fourthSchoolName: state.fourthSchoolName,
            fourthSchoolDate: state.fourthSchoolDate,
            fourthSchoolQualification: state.fourthSchoolQualification,
    
            fifthSchoolName: state.fifthSchoolName,
            fifthSchoolDate: state.fifthSchoolDate,
            fifthSchoolQualification: state.fifthSchoolQualification,
            
            firstRefereeName: state.firstRefereeName,
            firstRefereeAddress: state.firstRefereeAddress,
            firstRefereePhone: state.firstRefereePhone,
            firstRefereeOccupation: state.firstRefereeOccupation,
        
            secondRefereeName: state.secondRefereeName,
            secondRefereeAddress: state.secondRefereeAddress,
            secondRefereePhone: state.secondRefereePhone,
            secondRefereeOccupation: state.secondRefereeOccupation,
    
            thirdRefereeName: state.thirdRefereeName,
            thirdRefereeAddress: state.thirdRefereeAddress,
            thirdRefereePhone: state.thirdRefereePhone,
            thirdRefereeOccupation: state.thirdRefereeOccupation
        
        };
        
        this.props.setStudentProfile(data, this.state.student.id);
    }

    render () {
        const { 
            dateOfBirth,
            placeOfBirth,
            stateOfOrigin,
            homeTown,
            lga,
            nationality,
            homeAddress,
            contactAddress,
            postalAddress,
            phone,
            nextOfKin,
            nextOfKinPhone,
            
            firstSchoolName,
            firstSchoolDate,
            firstSchoolQualification,

            secondSchoolName,
            secondSchoolDate,
            secondSchoolQualification,

            thirdSchoolName,
            thirdSchoolDate,
            thirdSchoolQualification,

            fourthSchoolName,
            fourthSchoolDate,
            fourthSchoolQualification,

            fifthSchoolName,
            fifthSchoolDate,
            fifthSchoolQualification,

            firstRefereeName,
            firstRefereeAddress,
            firstRefereePhone,
            firstRefereeOccupation,

            secondRefereeName,
            secondRefereeAddress,
            secondRefereePhone,
            secondRefereeOccupation,

            thirdRefereeName,
            thirdRefereeAddress,
            thirdRefereePhone,
            thirdRefereeOccupation,

            profile,
            errors, 
        } = this.state;

        return (
            <>
                {!isEmpty(profile) ? (<p onClick={this.setStudentProfile} className="edit-profile">Edit Profile Data</p>) : null}
                <p style={{ fontWeight: 'bold', marginLeft: '1.5rem', marginRight: '1.5rem' }}>Please provide your information to enable us process your application.</p>
                <form onSubmit={this.onSubmit} className="profile-form">
                    <h5  className="form-header">Personal Information</h5>
                    <div></div>
                    <ProfileTextInput 
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={dateOfBirth}
                        title="Date of Birth is required"
                        onChange={this.onChange}
                        label="Date of Birth"
                        errorMessage={errors.dateOfBirth}
                    />
                    <ProfileTextInput 
                        id="placeOfBirth"
                        name="placeOfBirth"
                        value={placeOfBirth}
                        title="Place of Birth is required"
                        onChange={this.onChange}
                        label="Place of Birth"
                        errorMessage={errors.placeOfBirth}
                    />
                    <div className="input-field profile-input">
                        <p>Select your Gender:</p><br />
                        <p>
                            <label htmlFor="male">
                                <input 
                                    type="radio" 
                                    id="male" 
                                    // checked={profile.sex === 'male' ? 'checked' : false}
                                    className="with-gap validate" 
                                    name="sex"
                                    value="male"
                                    title="Gender is required"
                                    onChange={this.onChange}
                                />
                                <span>Male</span>
                            </label>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            <label htmlFor="female">
                                <input 
                                    type="radio"
                                    id="female" 
                                    // checked={profile.sex === 'female' ? 'checked' : false}
                                    className="with-gap validate" 
                                    name="sex" 
                                    value="female"
                                    title="Gender is required"
                                    onChange={this.onChange}
                                />
                                <span>Female</span>
                            </label>
                        </p>
                        {errors.sex ? (<span className="helper-text invalid-text">{errors.sex}</span>) : null}
                    </div>
                    <div className="input-field profile-input">
                        <p>Marital Status:</p><br />
                        <p>
                            <label htmlFor="single">
                                <input 
                                    type="radio" 
                                    id="single" 
                                    // checked={profile.maritalStatus === 'single' ? 'checked' : false}
                                    className="with-gap validate" 
                                    name="maritalStatus"
                                    value="single"
                                    title="Marital Status is required"
                                    onChange={this.onChange}
                                />
                                <span>Single</span>
                            </label>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            <label htmlFor="married">
                                <input 
                                    type="radio" 
                                    id="married" 
                                    // checked={profile.maritalStatus === 'married' ? 'checked' : false}
                                    className="with-gap validate" 
                                    name="maritalStatus"
                                    value="married"
                                    title="Marital Status is required"
                                    onChange={this.onChange}
                                />
                                <span>Married</span>
                            </label>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            <label htmlFor="divorced">
                                <input 
                                    type="radio" 
                                    id="divorced" 
                                    // checked={profile.maritalStatus === 'divorced' ? 'checked' : false}
                                    className="with-gap validate" 
                                    name="maritalStatus"
                                    value="divorced"
                                    title="Marital Status is required"
                                    onChange={this.onChange}
                                />
                                <span>Divorced</span>
                            </label>
                        </p>
                        {errors.maritalStatus ? (<span className="helper-text invalid-text">{errors.maritalStatus}</span>) : null}
                    </div>
                    <StateOfOriginInput 
                        value={stateOfOrigin}
                        onChange={this.onChange}
                        errorMessage={errors.stateOfOrigin}
                    />
                    <ProfileTextInput 
                        id="homeTown"
                        name="homeTown"
                        value={homeTown}
                        title="Home Town is required"
                        onChange={this.onChange}
                        label="Home Town"
                        errorMessage={errors.homeTown}
                    />
                    <ProfileTextInput 
                        id="lga"
                        name="lga"
                        value={lga}
                        title="Local Government Area is required"
                        onChange={this.onChange}
                        label="Local Government Area"
                        errorMessage={errors.lga}
                    />
                    <ProfileTextInput 
                        id="nationality"
                        name="nationality"
                        value={nationality}
                        title="Nationality is required"
                        onChange={this.onChange}
                        label="Nationality"
                        errorMessage={errors.nationality}
                    />
                    <div className="input-field profile-input">
                        <p>Religion:</p><br />
                        <p>
                            <label htmlFor="christianity">
                                <input 
                                    type="radio" 
                                    // checked={profile.religion === 'christianity' ? "checked" : false}
                                    id="christianity" 
                                    className="with-gap validate" 
                                    name="religion"
                                    value="christianity"
                                    title="Religion is required"
                                    onChange={this.onChange}
                                />
                                <span>Christianity</span>
                            </label>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            <label htmlFor="islam">
                                <input 
                                    type="radio" 
                                    id="islam" 
                                    // checked={profile.religion === 'islam' ? "checked" : false}
                                    className="with-gap validate" 
                                    name="religion"
                                    value="islam"
                                    title="Religion is required"
                                    onChange={this.onChange}
                                />
                                <span>Islam</span>
                            </label>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            <label htmlFor="others">
                                <input 
                                    type="radio" 
                                    id="others" 
                                    // checked={profile.religion === 'others' ? "checked" : false}
                                    className="with-gap validate" 
                                    name="religion"
                                    value="others"
                                    title="Religion is required"
                                    onChange={this.onChange}
                                />
                                <span>Others</span>
                            </label>
                            {errors.religion ? (<span className="helper-text invalid-text">{errors.religion}</span>) : null}
                        </p>
                    </div>
                    <ProfileTextInput 
                        id="homeAddress"
                        name="homeAddress"
                        value={homeAddress}
                        title="Home Address is required"
                        onChange={this.onChange}
                        label="Home Address"
                        errorMessage={errors.homeAddress}
                    />
                    <ProfileTextInput 
                        id="contactAddress"
                        name="contactAddress"
                        value={contactAddress}
                        title="Contact Address is required"
                        onChange={this.onChange}
                        label="Contact Address"
                        errorMessage={errors.contactAddress}
                    />
                    <ProfileTextInput 
                        id="postalAddress"
                        name="postalAddress"
                        value={postalAddress}
                        title="Postal Address is required"
                        onChange={this.onChange}
                        label="Postal Address"
                        errorMessage={errors.postalAddress}
                    />
                    <ProfileTextInput 
                        id="phone"
                        name="phone"
                        value={phone}
                        title="Phone Number is required"
                        onChange={this.onChange}
                        label="Phone Number"
                        errorMessage={errors.phone}
                        info="e.g. 08012345678"
                    />
                    <ProfileTextInput 
                        id="nextOfKin"
                        name="nextOfKin"
                        value={nextOfKin}
                        title="Next of Kin is required"
                        onChange={this.onChange}
                        label="Next of Kin"
                        errorMessage={errors.nextOfKin}
                        info="Provide Next of Kin Name"
                    />
                    <ProfileTextInput 
                        id="nextOfKinPhone"
                        name="nextOfKinPhone"
                        value={nextOfKinPhone}
                        title="Next of Kin Phone Number is required"
                        onChange={this.onChange}
                        label="Next of Kin Phone Number"
                        errorMessage={errors.nextOfKinPhone}
                        info="e.g. 08012345678"
                    />
                    <div></div>
                    <h5 className="form-header">Education Information</h5>
                    <div>
                    </div>
                    <ProfileTextInput 
                        id="firstSchoolName"
                        name="firstSchoolName"
                        value={firstSchoolName}
                        title="School name is required"
                        onChange={this.onChange}
                        label="Enter School Name"
                        errorMessage={errors.firstSchoolName}
                    />
                    <ProfileTextInput 
                        id="firstSchoolDate"
                        name="firstSchoolDate"
                        value={firstSchoolDate}
                        title="Date of Completion is required"
                        onChange={this.onChange}
                        label="Date of Completion"
                        errorMessage={errors.firstSchoolDate}
                        info="e.g. January 2020"
                    />
                    <ProfileTextInput 
                        id="firstSchoolQualification"
                        name="firstSchoolQualification"
                        value={firstSchoolQualification}
                        title="Qualification is required"
                        onChange={this.onChange}
                        label="Qualification Attained"
                        errorMessage={errors.firstSchoolQualification}
                        info="e.g. WASSCE"
                    />
                    <div></div>

                    <ProfileTextInput 
                        id="secondSchoolName"
                        name="secondSchoolName"
                        value={secondSchoolName}
                        title="School name is required"
                        onChange={this.onChange}
                        label="Enter School Name"
                        errorMessage={errors.secondSchoolName}
                    />
                    <ProfileTextInput 
                        id="secondSchoolDate"
                        name="secondSchoolDate"
                        value={secondSchoolDate}
                        title="Date of Completion is required"
                        onChange={this.onChange}
                        label="Date of Completion"
                        errorMessage={errors.secondSchoolDate}
                        info="e.g. January 2020"
                    />
                    <ProfileTextInput 
                        id="secondSchoolQualification"
                        name="secondSchoolQualification"
                        value={secondSchoolQualification}
                        title="Qualification is required"
                        onChange={this.onChange}
                        label="Qualification Attained"
                        errorMessage={errors.secondSchoolQualification}
                        info="e.g. WASSCE"
                    />
                    <div></div>

                    <ProfileTextInput 
                        id="thirdSchoolName"
                        name="thirdSchoolName"
                        value={thirdSchoolName}
                        title="School name is required"
                        onChange={this.onChange}
                        label="Enter School Name"
                        errorMessage={errors.thirdSchoolName}
                    />
                    <ProfileTextInput 
                        id="thirdSchoolDate"
                        name="thirdSchoolDate"
                        value={thirdSchoolDate}
                        title="Date of Completion is required"
                        onChange={this.onChange}
                        label="Date of Completion"
                        errorMessage={errors.thirdSchoolDate}
                        info="e.g. January 2020"
                    />
                    <ProfileTextInput 
                        id="thirdSchoolQualification"
                        name="thirdSchoolQualification"
                        value={thirdSchoolQualification}
                        title="Qualification is required"
                        onChange={this.onChange}
                        label="Qualification Attained"
                        errorMessage={errors.thirdSchoolQualification}
                        info="e.g. WASSCE"
                    />
                    <div></div>

                    <ProfileTextInput 
                        id="fourthSchoolName"
                        name="fourthSchoolName"
                        value={fourthSchoolName}
                        title="School name is required"
                        onChange={this.onChange}
                        label="Enter School Name"
                        errorMessage={errors.fourthSchoolName}
                    />
                    <ProfileTextInput 
                        id="fourthSchoolDate"
                        name="fourthSchoolDate"
                        value={fourthSchoolDate}
                        title="Date of Completion is required"
                        onChange={this.onChange}
                        label="Date of Completion"
                        errorMessage={errors.fourthSchoolDate}
                        info="e.g. January 2020"
                    />
                    <ProfileTextInput 
                        id="fourthSchoolQualification"
                        name="fourthSchoolQualification"
                        value={fourthSchoolQualification}
                        title="Qualification is required"
                        onChange={this.onChange}
                        label="Qualification Attained"
                        errorMessage={errors.fourthSchoolQualification}
                        info="e.g. WASSCE"
                    />
                    <div></div>

                    <ProfileTextInput 
                        id="fifthSchoolName"
                        name="fifthSchoolName"
                        value={fifthSchoolName}
                        title="School name is required"
                        onChange={this.onChange}
                        label="Enter School Name"
                        errorMessage={errors.fifthSchoolName}
                    />
                    <ProfileTextInput 
                        id="fifthSchoolDate"
                        name="fifthSchoolDate"
                        value={fifthSchoolDate}
                        title="Date of Completion is required"
                        onChange={this.onChange}
                        label="Date of Completion"
                        errorMessage={errors.fifthSchoolDate}
                        info="e.g. January 2020"
                    />
                    <ProfileTextInput 
                        id="fifthSchoolQualification"
                        name="fifthSchoolQualification"
                        value={fifthSchoolQualification}
                        title="Qualification is required"
                        onChange={this.onChange}
                        label="Qualification Attained"
                        errorMessage={errors.fifthSchoolQualification}
                        info="e.g. WASSCE"
                    />
                    <div></div>
                    <h5 className="form-header">Referee Information</h5>
                    <div></div>
                    <ProfileTextInput 
                        id="firstRefereeName"
                        name="firstRefereeName"
                        value={firstRefereeName}
                        title="Referee Name is required"
                        onChange={this.onChange}
                        label="First Referee Name"
                        errorMessage={errors.firstRefereeName}
                    />
                    <div className="input-field profile-input">
                        <textarea 
                            className="materialize-textarea validate"
                            id="firstRefereeAddress"
                            name="firstRefereeAddress"
                            value={firstRefereeAddress}
                            onChange={this.onChange}
                        >
                        </textarea>
                        <label htmlFor="firstRefereeAddress">First Referee Address</label>
                        {errors.firstRefereeAddress ? <span className="helper-text invalid-text">{errors.firstRefereeAddress}</span> : null}
                    </div>
                    <ProfileTextInput 
                        id="firstRefereePhone"
                        name="firstRefereePhone"
                        value={firstRefereePhone}
                        title="Referee Phone Number is required"
                        onChange={this.onChange}
                        label="First Referee Phone Number"
                        errorMessage={errors.firstRefereePhone}
                    />
                    <ProfileTextInput 
                        id="firstRefereeOccupation"
                        name="firstRefereeOccupation"
                        value={firstRefereeOccupation}
                        title="Referee Occupation is required"
                        onChange={this.onChange}
                        label="First Referee Occupation"
                        errorMessage={errors.firstRefereeOccupation}
                    />

                    <ProfileTextInput 
                        id="secondRefereeName"
                        name="secondRefereeName"
                        value={secondRefereeName}
                        title="Referee Name is required"
                        onChange={this.onChange}
                        label="Second Referee Name"
                        errorMessage={errors.secondRefereeName}
                    />
                    <div className="input-field profile-input">
                        <textarea 
                            className="materialize-textarea validate"
                            id="secondRefereeAddress"
                            name="secondRefereeAddress"
                            value={secondRefereeAddress}
                            onChange={this.onChange}
                        >
                        </textarea>
                        <label htmlFor="secondRefereeAddress">Second Referee Address</label>
                        {errors.secondRefereeAddress ? <span className="helper-text invalid-text">{errors.secondRefereeAddress}</span> : null}
                    </div>
                    <ProfileTextInput 
                        id="secondRefereePhone"
                        name="secondRefereePhone"
                        value={secondRefereePhone}
                        title="Referee Phone Number is required"
                        onChange={this.onChange}
                        label="Second Referee Phone Number"
                        errorMessage={errors.secondRefereePhone}
                    />
                    <ProfileTextInput 
                        id="secondRefereeOccupation"
                        name="secondRefereeOccupation"
                        value={secondRefereeOccupation}
                        title="Referee Occupation is required"
                        onChange={this.onChange}
                        label="Second Referee Occupation"
                        errorMessage={errors.secondRefereeOccupation}
                    />

                    <ProfileTextInput 
                        id="thirdRefereeName"
                        name="thirdRefereeName"
                        value={thirdRefereeName}
                        title="Referee Name is required"
                        onChange={this.onChange}
                        label="Third Referee Name"
                        errorMessage={errors.thirdRefereeName}
                    />
                    <div className="input-field profile-input">
                        <textarea 
                            className="materialize-textarea validate"
                            id="thirdRefereeAddress"
                            name="thirdRefereeAddress"
                            value={thirdRefereeAddress}
                            onChange={this.onChange}
                        >
                        </textarea>
                        <label htmlFor="thirdRefereeAddress">Third Referee Address</label>
                        {errors.thirdRefereeAddress ? <span className="helper-text invalid-text">{errors.thirdRefereeAddress}</span> : null}
                    </div>
                    <ProfileTextInput 
                        id="thirdRefereePhone"
                        name="thirdRefereePhone"
                        value={thirdRefereePhone}
                        title="Referee Phone Number is required"
                        onChange={this.onChange}
                        label="Third Referee Phone Number"
                        errorMessage={errors.thirdRefereePhone}
                    />
                    <ProfileTextInput 
                        id="thirdRefereeOccupation"
                        name="thirdRefereeOccupation"
                        value={thirdRefereeOccupation}
                        title="Referee Occupation is required"
                        onChange={this.onChange}
                        label="Third Referee Occupation"
                        errorMessage={errors.thirdRefereeOccupation}
                    />
                    <div className="profile-input">
                        <button>Save Information</button>
                    </div>
            </form>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    student: state.student,
    errors: state.errors
});

DataForm.propTypes = {
    getStudentProfile: PropTypes.func.isRequired,    
    setStudentProfile: PropTypes.func.isRequired    
};

export default connect(mapStateToProps, { getStudentProfile, setStudentProfile })(DataForm);