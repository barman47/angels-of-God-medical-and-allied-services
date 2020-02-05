const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = (data) => {
    let errors = {};

    data.name = !isEmpty(data.name) ?  data.name : '';
    data.age = !isEmpty(data.age) ?  data.age : '';
    data.gender = !isEmpty(data.gender) ?  data.gender : '';
    data.occupation = !isEmpty(data.occupation) ?  data.occupation : '';
    data.maritalStatus = !isEmpty(data.maritalStatus) ?  data.maritalStatus : '';
    data.education = !isEmpty(data.education) ?  data.education : '';
    data.address = !isEmpty(data.address) ?  data.address : '';
    data.stateOfOrigin = !isEmpty(data.stateOfOrigin) ?  data.stateOfOrigin : '';
    data.lga = !isEmpty(data.lga) ?  data.lga : '';
    data.religion = !isEmpty(data.religion) ?  data.religion : '';
    data.reason = !isEmpty(data.reason) ?  data.reason : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Your name is required!';
    }


    if (Validator.isEmpty(data.age)) {
        errors.age = 'Age is required!';
    }

    if (Validator.isEmpty(data.gender)) {
        errors.gender = 'Gender is required!';
    }

    if (Validator.isEmpty(data.occupation)) {
        errors.occupation = 'Occupation is required!';
    }

    if (Validator.isEmpty(data.maritalStatus)) {
        errors.maritalStatus = 'Marital status is required!';
    }

    if (Validator.isEmpty(data.education)) {
        errors.education = 'Your highest level of education is required!';
    }

    if (Validator.isEmpty(data.address)) {
        errors.address = 'Address is required!';
    }

    if (Validator.isEmpty(data.stateOfOrigin)) {
        errors.stateOfOrigin = 'State of Origin is required!';
    }

    if (Validator.isEmpty(data.lga)) {
        errors.lga = 'Local Government is required is required!';
    }

    if (Validator.isEmpty(data.religion)) {
        errors.religion = 'Religion is required!';
    }

    if (Validator.isEmpty(data.reason)) {
        errors.reason = 'Reason for appointment is required!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};