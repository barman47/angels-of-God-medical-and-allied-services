const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = (data) => {
    let errors = {};

    data.dateOfBirth = !isEmpty(data.dateOfBirth) ?  data.dateOfBirth : '';
    data.placeOfBirth = !isEmpty(data.placeOfBirth) ?  data.placeOfBirth : '';
    data.sex = !isEmpty(data.sex) ?  data.sex : '';
    data.maritalStatus = !isEmpty(data.maritalStatus) ?  data.maritalStatus : '';
    data.homeTown = !isEmpty(data.homeTown) ?  data.homeTown : '';
    data.lga = !isEmpty(data.lga) ?  data.lga : '';
    data.stateOfOrigin = !isEmpty(data.stateOfOrigin) ?  data.stateOfOrigin : '';
    data.nationality = !isEmpty(data.nationality) ?  data.nationality : '';
    data.religion = !isEmpty(data.religion) ?  data.religion : '';
    data.homeAddress = !isEmpty(data.homeAddress) ?  data.homeAddress : '';
    data.contactAddress = !isEmpty(data.contactAddress) ?  data.contactAddress : '';
    data.postalAddress = !isEmpty(data.postalAddress) ?  data.postalAddress : '';
    data.phone = !isEmpty(data.phone) ?  data.phone : '';
    data.nextOfKin = !isEmpty(data.nextOfKin) ?  data.nextOfKin : '';
    data.nextOfKinPhone = !isEmpty(data.nextOfKinPhone) ?  data.nextOfKinPhone : '';
    
    data.firstSchoolName = !isEmpty(data.firstSchoolName) ?  data.firstSchoolName : '';
    data.firstSchoolDate = !isEmpty(data.firstSchoolDate) ?  data.firstSchoolDate : '';
    data.firstSchoolQualification = !isEmpty(data.firstSchoolQualification) ?  data.firstSchoolQualification : '';

    data.secondSchoolName = !isEmpty(data.secondSchoolName) ?  data.secondSchoolName : '';
    data.secondSchoolDate = !isEmpty(data.secondSchoolDate) ?  data.secondSchoolDate : '';
    data.secondSchoolQualification = !isEmpty(data.secondSchoolQualification) ?  data.secondSchoolQualification : '';
    
    
    data.firstRefereeName = !isEmpty(data.firstRefereeName) ?  data.firstRefereeName : '';
    data.firstRefereeAddress = !isEmpty(data.firstRefereeAddress) ?  data.firstRefereeAddress : '';
    data.firstRefereePhone = !isEmpty(data.firstRefereePhone) ?  data.firstRefereePhone : '';
    data.firstRefereeOccupation = !isEmpty(data.firstRefereeOccupation) ?  data.firstRefereeOccupation : '';

    data.secondRefereeName = !isEmpty(data.secondRefereeName) ?  data.secondRefereeName : '';
    data.secondRefereeAddress = !isEmpty(data.secondRefereeAddress) ?  data.secondRefereeAddress : '';
    data.secondRefereePhone = !isEmpty(data.secondRefereePhone) ?  data.secondRefereePhone : '';
    data.secondRefereeOccupation = !isEmpty(data.secondRefereeOccupation) ?  data.secondRefereeOccupation : '';

    data.thirdRefereeName = !isEmpty(data.thirdRefereeName) ?  data.thirdRefereeName : '';
    data.thirdRefereeAddress = !isEmpty(data.thirdRefereeAddress) ?  data.thirdRefereeAddress : '';
    data.thirdRefereePhone = !isEmpty(data.thirdRefereePhone) ?  data.thirdRefereePhone : '';
    data.thirdRefereeOccupation = !isEmpty(data.thirdRefereeOccupation) ?  data.thirdRefereeOccupation : '';
  

    if (Validator.isEmpty(data.dateOfBirth)) {
        errors.dateOfBirth = 'Your Date of Birth is required is required!';
    }

    if (Validator.isEmpty(data.placeOfBirth)) {
        errors.placeOfBirth = 'Your Place of Birth is required is required!';
    }

    if (Validator.isEmpty(data.sex)) {
        errors.sex = 'Your gender is required is required!';
    }

    if (Validator.isEmpty(data.maritalStatus)) {
        errors.maritalStatus = 'Your marital status is required is required!';
    }

    if (Validator.isEmpty(data.homeTown)) {
        errors.homeTown = 'Your Home Town is required is required!';
    }

    if (Validator.isEmpty(data.lga)) {
        errors.lga = 'Your Local Government is required is required!';
    }

    if (Validator.isEmpty(data.stateOfOrigin)) {
        errors.stateOfOrigin = 'Your State of Origin is required is required!';
    }

    if (Validator.isEmpty(data.nationality)) {
        errors.nationality = 'Your Nationality is required is required!';
    }

    if (Validator.isEmpty(data.religion)) {
        errors.religion = 'Your Religion is required is required!';
    }

    if (Validator.isEmpty(data.homeAddress)) {
        errors.homeAddress = 'Your Permanent Home Address is required is required!';
    }

    if (Validator.isEmpty(data.contactAddress)) {
        errors.contactAddress = 'Your Present Contact Address is required is required!';
    }

    if (Validator.isEmpty(data.postalAddress)) {
        errors.postalAddress = 'Your Postal Address is required is required!';
    }

    if (!Validator.isMobilePhone(data.phone)) {
        errors.phone = 'Invalid Phone Number!';
    }
    if (!Validator.equals(data.phone.length.toString(), '11')) {
        errors.phone = 'Invalid Phone Number!';
    }
    if (Validator.isEmpty(data.phone)) {
        errors.phone = 'Your Phone Number is required!';
    }

    if (Validator.isEmpty(data.nextOfKin)) {
        errors.nextOfKin = 'Your Next of Kin is required!';
    }

    if (!Validator.isMobilePhone(data.nextOfKinPhone)) {
        errors.nextOfKinPhone = 'Invalid Phone Number!';
    }
    if (!Validator.equals(data.nextOfKinPhone.length.toString(), '11')) {
        errors.nextOfKinPhone = 'Invalid Phone Number!';
    }
    if (Validator.isEmpty(data.nextOfKinPhone)) {
        errors.nextOfKinPhone = 'Your Next of Kin Phone Number is required!';
    }

    if (Validator.isEmpty(data.firstSchoolName)) {
        errors.firstSchoolName = 'Your School Name is required';
    }
    if (Validator.isEmpty(data.firstSchoolDate)) {
        errors.firstSchoolDate = 'Date of Completion is required is required!';
    }
    if (Validator.isEmpty(data.firstSchoolQualification)) {
        errors.firstSchoolQualification = 'Attained qualification is required is required!';
    }
    if (Validator.isEmpty(data.secondSchoolName)) {
        errors.secondSchoolName = 'Your School Name is required';
    }
    if (Validator.isEmpty(data.secondSchoolDate)) {
        errors.secondSchoolDate = 'Date of Completion is required is required!';
    }
    if (Validator.isEmpty(data.secondSchoolQualification)) {
        errors.secondSchoolQualification = 'Attained qualification is required is required!';
    }

    if (Validator.isEmpty(data.firstRefereeName)) {
        errors.firstRefereeName = 'Referee Name is required is required!';
    }
    if (Validator.isEmpty(data.firstRefereeAddress)) {
        errors.firstRefereeAddress = 'Referee Address is required is required!';
    }
    if (Validator.isEmpty(data.firstRefereeOccupation)) {
        errors.firstRefereeOccupation = 'Referee Address is required is required!';
    }
    if (!Validator.isMobilePhone(data.firstRefereePhone)) {
        errors.firstRefereePhone = 'Invalid Referee Phone Number!';
    }
    if (!Validator.equals(data.firstRefereePhone.length.toString(), '11')) {
        errors.firstRefereePhone = 'Invalid Referee Phone Number!';
    }
    if (Validator.isEmpty(data.firstRefereePhone)) {
        errors.firstRefereePhone = 'Your Referee Phone Number is required!';
    }

    if (Validator.isEmpty(data.secondRefereeName)) {
        errors.secondRefereeName = 'Referee Name is required is required!';
    }
    if (Validator.isEmpty(data.secondRefereeAddress)) {
        errors.secondRefereeAddress = 'Referee Address is required is required!';
    }
    if (Validator.isEmpty(data.secondRefereeOccupation)) {
        errors.secondRefereeOccupation = 'Referee Address is required is required!';
    }
    if (!Validator.isMobilePhone(data.secondRefereePhone)) {
        errors.secondRefereePhone = 'Invalid Referee Phone Number!';
    }
    if (!Validator.equals(data.secondRefereePhone.length.toString(), '11')) {
        errors.secondRefereePhone = 'Invalid Referee Phone Number!';
    }
    if (Validator.isEmpty(data.secondRefereePhone)) {
        errors.secondRefereePhone = 'Your Referee Phone Number is required!';
    }

    if (Validator.isEmpty(data.thirdRefereeName)) {
        errors.thirdRefereeName = 'Referee Name is required is required!';
    }
    if (Validator.isEmpty(data.thirdRefereeAddress)) {
        errors.thirdRefereeAddress = 'Referee Address is required is required!';
    }
    if (Validator.isEmpty(data.thirdRefereeOccupation)) {
        errors.thirdRefereeOccupation = 'Referee Address is required is required!';
    }
    if (!Validator.isMobilePhone(data.thirdRefereePhone)) {
        errors.thirdRefereePhone = 'Invalid Referee Phone Number!';
    }
    if (!Validator.equals(data.thirdRefereePhone.length.toString(), '11')) {
        errors.thirdRefereePhone = 'Invalid Referee Phone Number!';
    }
    if (Validator.isEmpty(data.thirdRefereePhone)) {
        errors.thirdRefereePhone = 'Your Referee Phone Number is required!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};