'use strict';

const { find, create } = require('../queries/admin')

async function createAdmin (req, res, next) {
    const { body }  = req
    try {
        const createdAdmin = await create(body)
        res.status(201).send(createdAdmin)
    } catch (ex) {
        next(ex)
    }
}

async function getAdmin(req, res, next) {
    try {
        const admins = await find()
        if (!admins.length) return res.status(404).send({ message: 'No admin found' })
        res.status(200).json({ success: true, count: admins.length, data: admins})

    } catch (ex) {
        next(ex)
    }
}

module.exports = {
    getAdmin,
    createAdmin
}
