const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = (data) => {
    let errors = {};

    data.name = !isEmpty(data.name) ?  data.name : '';
    data.email = !isEmpty(data.email) ?  data.email : '';

    if (!Validator.isLength(data.name, { min: 2, max: 15 })) {
        errors.name = 'Name must be from 2 to 15 characters long!'
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name is required!';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email address is required!';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid email address!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};