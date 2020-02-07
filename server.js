const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const secure = require('express-force-https');
const { database_URI } = require('./config/keys');

const admin = require('./routes/api/admin');
const patients = require('./routes/api/patients');
const profiles = require('./routes/api/profiles');
const students = require('./routes/api/students');

const app = express();

const publicPath = path.resolve(__dirname, 'client', 'build');

const PORT = process.env.PORT || 5000;

mongoose.connect(database_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => console.log('Database Connected!'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')

app.use(secure);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));

app.use('/api/admin', admin);
app.use('/api/patients', patients);
app.use('/api/profiles', profiles);
app.use('/api/students', students);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
