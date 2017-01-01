const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
const config = require('../config.js');

// The Auth Checker middleware function.
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  // Get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // Decode the token using a secret key-phrase
  return jwt.verify(token, config.jwt.SECRET, (err, decoded) => {
    // The 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }

    const userId = decoded.sub;

    // Check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.status(401).end();
      }

      return next();
    });
  });
};
