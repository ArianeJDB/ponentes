const express = require('express');
const login = express.Router();
const loginController = require('../controllers/login')
// const passport = require('passport');

login.post('/', loginController)


module.exports = login; 