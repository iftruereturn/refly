const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const config = require('./config/config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB connect
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dburl = process.env.PROD_MONGODB || config.mongo.URL;
mongoose.connect(dburl);

// Static files
app.use(express.static('../public/'));

// Passport
app.use(passport.initialize());
// Load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// Set routes
require('./routes')(app);

app.listen(config.app.PORT, () => {
  console.log(`Server listens at port: ${config.app.PORT}`);
});
