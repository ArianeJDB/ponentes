'use strict';

const Admin = require('../models/admin')
const adminData = require('../adminData')

function createAdmin (req, res) { 
    console.log('CREATE ADMIN')
    Admin.create(adminData, (err) => {
        if (err) return res.status(500).send({ message: `Server error ${err}` })
        console.log('holaaa')
    })
}

function getAdmin(req, res) {
    
    Admin.find({}, (err, admin) => {
        if (err) return res.status(500).send({ message: `Server error: ${err}` })

        if (!admin) {
            return res.status(404).send({ message: 'There is no admin' })}

        if (admin.length === 0) createAdmin();

    })
}

module.exports = {
    getAdmin
}