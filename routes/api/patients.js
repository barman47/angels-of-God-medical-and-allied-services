const express = require('express');
const passport = require('passport');
const router = express.Router();

const Patient = require('../../models/Patient');

const validatePatientBooking = require('../../utils/validation/patientBooking');

// GET Patients
// @route GET /api/patients/all
// @desc Get all patients
// @access Private
router.get('/all', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
    Patient.find({})
        .then(patients => {
            if (!patients) {
                return res.status(404).json({ msg: 'No Patients' });
            }
            res.json(patients);
        })
        .catch(err => console.error(err));
});

// Post Booking
// @route POST /api/patients/book
// @desc Book doctors appointment
// @access Public
router.post('/book', (req, res) => {
    const { isValid, errors } = validatePatientBooking(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const patient = new Patient({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        occupation: req.body.occupation,
        maritalStatus: req.body.maritalStatus,
        education: req.body.education,
        address: req.body.address,
        stateOfOrigin: req.body.stateOfOrigin,
        lga: req.body.lga,
        religion: req.body.religion,
        reason: req.body.reason
    });

    patient.save()
        .then(res.json({ msg: 'Booking Successful' }))
        .catch(err => console.error(err));
});

// Toggle Has Visited
// @route PUT /api/payments/toggleHasVisited/id
// @desc Toggle Patient Payment by ID
// @access Public
router.put('/toggleHasVisited/:id', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
    Patient.findById(req.params.id)
        .then(patient => {
            patient.hasVisited = !patient.hasVisited;
            patient.save()
                .then(patient => {
                    const updatedPatient = {
                        id: patient.updatedPatient,
                        name: patient.name,
                        age: patient.age,
                        gender: patient.gender,
                        occupation: patient.occupation,
                        maritalStatus: patient.maritalStatus,
                        education: patient.education,
                        address: patient.address,
                        stateOfOrigin: patient.stateOfOrigin,
                        lga: patient.lga,
                        religion: patient.religion,
                        reason: patient.reason,
                        hasVisited: patient.email,
                        dateCreated: patient.dateCreated
                    };
                    res.json(updatedPatient);
                })
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
});
module.exports = router;