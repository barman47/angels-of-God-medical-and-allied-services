const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    occupation: {
        type: String,
        required: true
    },

    maritalStatus: {
        type: String
    },

    education: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    stateOfOrigin: {
        type: String,
        required: true
    },

    lga: {
        type: String,
        required: true
    },

    religion: {
        type: String,
        required: true
    },

    hasVisited: {
        type: Boolean,
        default: false
    },

    dateCreated: {
        type: Date,
        default: new Date()
    }
});

module.exports = Patient = mongoose.model('patient', PatientSchema);