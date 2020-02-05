const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();

const validateRegisterInput = require('../../utils/validation/register');
const validateLoginInput = require('../../utils/validation/login');
const validateChangePasswordInput = require('../../utils/validation/changePassword');
const validateUpdateDataInput = require('../../utils/validation/updateData');

const { secretOrKey } = require('../../config/keys');

// Get Students
// @route GET /api/students/all
// @desc Get all students
// @access Private
router.get('/:id', passport.authenticate('jwt-student', { session: false }), (req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json({ hasPaid: student.hasPaid }))
        .catch(err => console.error(err))
});

// Get Students
// @route GET /api/students/all
// @desc Get all students
// @access Private
router.get('/all', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
    Student.find({})
        .then(students => {
            if (!students) {
                return res.status(404).json({ msg: 'No Students found' });
            }
            let newStudents = [];
            students.forEach(student => {
                newStudents.push({
                    id: student._id,
                    dateCreated: student.dateCreated,
                    name: student.name,
                    email: student.email,
                    hasPaid: student.hasPaid
                });
            });
            res.json(newStudents);
        })
        .catch(err => console.error(err));
});

// Register new student
// @route POST /api/students/register
// @desc register student
// @access Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    const { name, email, password } = req.body;

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Student.findOne({ email: req.body.email })
        .then(returnedStudent => {
            if (returnedStudent) {
                errors.email = 'Account already exists!';
                return res.status(406).json(errors);
            }

            const student = new Student({
                name: name.toUpperCase(),
                email: email.toLowerCase(),
                password: password
            });

            bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    return console.log(err);
                }
        
                bcrypt.hash(student.password, salt, (err, hash) => {
                    if (err) {
                        return console.log(err);
                    }
                    student.password = hash;
                    student.save()
                        .then(savedStudent => {
                            const payload = {
                                id: savedStudent._id,
                                name: savedStudent.name,
                                email: savedStudent.email,
                                hasPaid: savedStudent.hasPaid,
                                createdAt: savedStudent.createdAt,
                            };
                            // Sign the token
                            jwt.sign(payload, secretOrKey, { expiresIn: '36000000' }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: `Bearer ${token}`
                                });
                            });
                        })
                        .catch(err => console.log(err))
                });
            });
        })
        .catch(err => console.log(err));
});

// Login student
// @route POST /api/students/login /Returmn JWT token
// @desc login student
// @access Private
// router.post('/login', (req, res) => {
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    Student.findOne({ email })
        .then(student => {
            if (!student) {
                errors.email = 'Student does not exist!';
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, student.password)
                .then(isMatch => {
                    if (!isMatch) {
                        errors.password = 'Incorrect password!';
                        return res.status(401).json(errors);
                    }
                    const payload = {
                        id: student._id,
                        name: student.name,
                        email: student.email,
                        hasPaid: student.hasPaid,
                        createdAt: student.createdAt
                    };
                    // Sign the token
                    jwt.sign(payload, secretOrKey, { expiresIn: '36000000' }, (err, token) => {
                        res.json({
                            success: true,
                            token: `Bearer ${token}`
                        });
                    });
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

// Toggle Payment
// @route PUT /api/students/togglePayment/id
// @desc Toggle Student Payment by ID
// @access Public
router.put('/togglePayment/:id', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            student.hasPaid = !student.hasPaid;
            student.save()
                .then(student => {
                    const updatedStudent = {
                        id: student.updatedStudent,
                        name: student.name,
                        email: student.email,
                        dateCreated: student.dateCreated,
                        hasPaid: student.email
                    };
                    res.json(updatedStudent);
                })
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
});

// Change password
// @route POST /api/students/changePassword
// @desc change student password
// @access Public
router.put('/changePassword', passport.authenticate('jwt-student', { session: false }), (req, res) => {
    const { errors, isValid } = validateChangePasswordInput(req.body);
    const { currentPassword, newPassword } = req.body;

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Student.findById(req.user.id)
        .then(student => {
            if (student) {
                bcrypt.compare(currentPassword, student.password)
                    .then(isMatch => {
                        if (!isMatch) {
                            errors.currentPassword = 'Incorrect Password!';
                            return res.status(401).json(errors);
                        }
                        bcrypt.genSalt(10, (err, salt) => {
                            if (err) {
                                return console.log(err);
                            }
                    
                            bcrypt.hash(newPassword, salt, (err, hash) => {
                                if (err) {
                                    return console.log(err);
                                }
                                bcrypt.compare(newPassword, student.password)
                                    .then(isMatch => {
                                        if (isMatch) {
                                            errors.newPassword = 'New password cannot be the same with the current password';
                                            return res.status(403).json(errors);
                                        } else {
                                            student.password = hash;
                                            student.save()
                                                .then(() => res.json({ msg: 'Password changed successfully!' }))
                                                .catch(err => console.log(err));
                                        }
                                    })
                                    .catch(err => console.log(err));
                            });
                        });
                    })
                    .catch(err => console.log(err));
            } 
        })
        .catch(err => console.log(err));
});

// Update data
// @route PUT /api/students/updateData
// @desc update student data
// @access Private
router.put('/updateData', passport.authenticate('jwt-student', { session: false }), (req, res) => {
    console.log()
    const { errors, isValid } = validateUpdateDataInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const studentData = {
        name: req.body.name.toUpperCase(),
        email: req.body.email.toLowerCase()
    };

    Student.findOne({ _id: req.user.id })
        .then(student => {
            if (student) {
                student.name = studentData.name;
                student.email = studentData.email;
                student.save()
                    .then(updatedStudent => {
                        const payload = {
                            id: updatedStudent.id,
                            name: updatedStudent.name,
                            email: updatedStudent.email,
                            hasPaid: updatedStudent.hasPaid,
                            createdAt: student.createdAt,
                        };
                        jwt.sign(payload, secretOrKey, { expiresIn: '36000000' }, (err, token) => {
                            res.json({
                                ...payload,
                                token: `Bearer ${token}`
                            });
                        });
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
});

module.exports = router;