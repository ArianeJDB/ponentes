'use strict'

const express = require('express');
const admin = express.Router();
const adminController = require('../controllers/admin')


admin.get('/', adminController.getAdmin)

module.exports = admin; 