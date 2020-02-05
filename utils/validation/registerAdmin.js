const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = (data) => {
    let errors = {};

    data.email = !isEmpty(data.email) ?  data.email : '';
    data.password = !isEmpty(data.password) ?  data.password : '';
    data.confirmPassword = !isEmpty(data.confirmPassword) ?  data.confirmPassword : '';

    if (!Validator.isEmail(data.email, { min: 5, max: 15 })) {
        errors.email = 'Invalid Email Address!'
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'email is required!';
    }

    if (!Validator.isLength(data.password, { min: 8})) {
        errors.password = 'password must be at least 8 characters long!'
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'password is required!';
    }

    if (!Validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Passwords do not match!'
    }

    if (Validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Please confirm your password!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};