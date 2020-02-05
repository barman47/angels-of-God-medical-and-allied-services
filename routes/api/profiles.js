const express = require('express');
const passport = require('passport');
const router = express.Router();

const Profile = require('../../models/Profile');

const validateProfileInput = require('../../utils/validation/profile');

// Add user profile
// @route POST /api/profiles/add
// @desc add user profile
// @access Private
router.post('/:id', passport.authenticate('jwt-student', { session: false }), (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const education = [
        {
            school: req.body.firstSchoolName,
            date: req.body.firstSchoolDate,
            qualification: req.body.firstSchoolQualification
        },
        {
            school: req.body.secondSchoolName,
            date: req.body.secondSchoolDate,
            qualification: req.body.secondSchoolQualification
        },
        {
            school: req.body.thirdSchoolName,
            date: req.body.thirdSchoolDate,
            qualification: req.body.thirdSchoolQualification
        },
        {
            school: req.body.fourthSchoolName,
            date: req.body.fourthSchoolDate,
            qualification: req.body.fourthSchoolQualification
        },
        {
            school: req.body.fifthSchoolName,
            date: req.body.fifthSchoolDate,
            qualification: req.body.fifthSchoolQualification
        },
    ];

    const referees = [
        {
            name: req.body.firstRefereeName,
            address: req.body.firstRefereeAddress,
            phone: req.body.firstRefereePhone,
            occupation: req.body.firstRefereeOccupation
        },
        {
            name: req.body.secondRefereeName,
            address: req.body.secondRefereeAddress,
            phone: req.body.secondRefereePhone,
            occupation: req.body.secondRefereeOccupation
        },
        {
            name: req.body.thirdRefereeName,
            address: req.body.thirdRefereeAddress,
            phone: req.body.thirdRefereePhone,
            occupation: req.body.thirdRefereeOccupation
        }
    ];


    const {
        dateOfBirth,
        placeOfBirth,
        sex,
        maritalStatus,
        homeTown,
        stateOfOrigin,
        lga,
        nationality,
        religion,
        homeAddress,
        contactAddress,
        postalAddress,
        phone,
        nextOfKin,
        nextOfKinPhone
    } = req.body;

    const studentProfile = new Profile({
        user: req.params.id,
        dateOfBirth,
        placeOfBirth,
        sex,
        maritalStatus,
        homeTown,
        stateOfOrigin,
        lga,
        nationality,
        religion,
        homeAddress,
        contactAddress,
        postalAddress,
        phone,
        nextOfKin,
        nextOfKinPhone,
        education,
        referees
    });

    Profile.findOne({ user: req.params.id })
        .then(profile => {
            if (!profile) {
                studentProfile.save()
                    .then(() => res.json({ msg: 'Profile Saved Successfully' }))
                    .catch(err => console.error(err));
            } else {
                profile.dateOfBirth = studentProfile.dateOfBirth;
                profile.placeOfBirth = studentProfile.placeOfBirth;
                profile.sex = studentProfile.sex;
                profile.maritalStatus = studentProfile.maritalStatus;
                profile.homeTown = studentProfile.homeTown;
                profile.stateOfOrigin = studentProfile.stateOfOrigin;
                profile.lga = studentProfile.lga;
                profile.nationality = studentProfile.nationality;
                profile.religion = studentProfile.religion;
                profile.homeAddress = studentProfile.homeAddress;
                profile.contactAddress = studentProfile.contactAddress;
                profile.postalAddress = studentProfile.postalAddress;
                profile.phone = studentProfile.phone;
                profile.nextOfKin = studentProfile.nextOfKin;
                profile.nextOfKinPhone = studentProfile.nextOfKinPhone;
                profile.education = studentProfile.education;
                profile.referees = studentProfile.referees;

                profile.save()
                    .then(() => res.json({ msg: 'Profile Updated' }))
                    .catch(err => console.error(err));
            }
        })
        .catch(err => console.error(err));
});

// GET profile
// @route GET /api/profiles/:id
// @desc find profile by user id
// @access Private
router.get('/:id', passport.authenticate('jwt-student', { session: false }), (req, res) => {
    Profile.findOne({ user: req.params.id })
        .then(profile => {
            if (!profile) {
                return res.status(404).json({ msg: 'Profile not found' });
            } 
            res.json(profile);
        })
        .catch(err => console.error(err));
});
module.exports = router;