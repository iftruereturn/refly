const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config/config.js');

// Return the Passport Local Strategy object
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  };

  // Find a user by email address
  return User.findOne({ email: userData.email }, (err, user) => {
    if (err) { return done(err); }

    if (!user) {
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    // Check if a hashed user's password is equal to a value saved in the database
    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      // jwt payload
      const payload = {
        sub: user._id,
        username: user.username
      };

      // Create a token string
      const token = jwt.sign(payload, config.jwt.SECRET);
      const data = {
        username: user.username
      };

      return done(null, token, data);
    });
  });
});
