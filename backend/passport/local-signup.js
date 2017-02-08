const User = require('../models/user.js');
const PassportLocalStrategy = require('passport-local').Strategy;
const flyerSettings = require('../config/flyerSettings.js');

// Return the Passport Local Strategy object
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false, // Because we use jwt
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    username: req.body.username.trim(),
    password: password.trim(),
    email: email.trim(),
    possibleSettings: flyerSettings
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});
