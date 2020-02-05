const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    },

    dateOfBirth: {
        type: Date,
        required: true
    },

    placeOfBirth: {
        type: String,
        required: true
    },

    sex: {
        type: String,
        required: true
    },

    maritalStatus: {
        type: String,
        required: true
    },

    homeTown: {
        type: String,
        required: true
    },

    lga: {
        type: String,
        required: true
    },

    stateOfOrigin: {
        type: String,
        required: true
    },

    nationality: {
        type: String,
        required: true
    },

    religion: {
        type: String,
        required: true
    },

    homeAddress: {
        type: String,
        required: true
    },

    contactAddress: {
        type: String,
        required: true
    },

    postalAddress: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    nextOfKin: {
        type: String,
        required: true
    },

    nextOfKinPhone: {
        type: String,
        required: true
    },

    hasPaid: {
        type: Boolean,
        default: false
    },

    education: [{
        school: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        qualification: {
            type: String,
            required: true
        }
    }],

    referees: [{
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        occupation: {
            type: String,
            required: true
        }
    }],

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);