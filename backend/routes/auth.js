const authRouter = require('express').Router();

const User = require('../models/user.js');

function signup(req, res) {

}

function login(req, res) {

}

function logout(req, res) {

}


authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.get('/logout', logout);

module.exports = authRouter;
