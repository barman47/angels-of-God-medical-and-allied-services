const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

const keys = require('../../config/keys');

const validateAdminLogin = require('../../utils/validation/adminLogin');
const validateChangeAdminPassword = require('../../utils/validation/changePassword');
const validateRegisterAdmin = require('../../utils/validation/registerAdmin');

const Admin = require('../../models/Admin');

// Register new admin
// @route POST /api/admin/register
// @desc register admin
// @access Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterAdmin(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const admin = new Admin({
        email: req.body.email,
        password: req.body.password
    });

    Admin.findOne({ email: admin.email })
        .then(returnedAdmin => {
            if (returnedAdmin) {
                errors.email = 'Admin already exists!';
                return res.status(501).json(errors)
            }

            bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    return console.log(err);
                }
                
                bcrypt.hash(admin.password, salt, (err, hash) => {
                    if (err) {
                        return console.log(err);
                    }
                    admin.password = hash;
                    admin.save()
                        .then(admin => res.json(admin))
                        .catch(err => console.log(err));
                });
            });
        })
        .catch(err => console.log(err));
});

// Login
// @route POST /api/admin/login
// @desc Login Admin
// @access Private
router.post('/login', (req, res) => {
    const { errors, isValid } = validateAdminLogin(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    Admin.findOne({ email })
        .then(admin => {
            if (!admin) {
                errors.email = 'Admin not found!';
                res.status(404).json(errors);
            }

            bcrypt.compare(password, admin.password)
                .then(isMatch => {
                    if (isMatch) {
                        // Admin matched
                        const payload = {
                            id: admin.id,
                            email: admin.email,
                            createdAt: admin.createdAt
                        }; // JWT Payload

                        // Sign the token
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: '7 days' }, (err, token) => {
                            // res.json({...payload, token: `Bearer ${token}`});
                            res.json({
                                success: true,
                                token: `Bearer ${token}`
                            });
                        });
                    } else {
                        errors.password = 'Password incorrect!';
                        return res.status(401).json(errors)
                    }
                })
                .catch(err => console.log(err));
        })
        .catch(err => {});
});

// Register change password
// @route POST /api/admin/changePassword
// @desc change adminpassword
// @access Private
router.put('/changePassword', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
    const { errors, isValid } = validateChangeAdminPassword(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;

    Admin.findOne({ _id: req.user.id })
        .then(admin => {
            if (!admin) {
                errors.email = 'Admin not found!';
                return res.status(404).json(errors);
            }

            bcrypt.compare(currentPassword, admin.password)
                .then(isMatch => {
                    if (!isMatch) {
                        errors.currentPassword = 'Incorrect password!';
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
                            bcrypt.compare(newPassword, admin.password)
                                .then(isMatch => {
                                    if (isMatch) {
                                        errors.newPassword = 'New password cannot be the same as the current one';
                                        res.status(406).json(errors);
                                    } else {
                                        admin.password = hash;
                                        admin.save()
                                            .then(() => {
                                                res.json({ message: 'Password changed successfully!' });
                                            })
                                            .catch(err => console.log(err));
                                    }
                                })
                                .catch(err => console.log(err));
                        });
                    });
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

// GET profile
// @route GET /api/profiles/:id
// @desc find profile by user id
// @access Private
router.get('/studentProfile/:id', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
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