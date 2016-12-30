const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username: { type: String, index: { unique: true } },
  password: String,
  email: { type: String, index: { unique: true } },

  flyers: [Schema.Types.ObjectId],

  possibleSettings: {
    background: [String],
    color: [String],
    font: [String],
    theme: [String]
  }
});

 // Compare the passed password with the value in the database. A model method.
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);