const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String
    },

    password: {
        type: String,
        required: true
    },

    hasPaid: {
        type: Boolean,
        default: false
    },

    dateCreated: {
        type: Date,
        default: new Date()
    }
});

module.exports = Student = mongoose.model('student', StudentSchema);