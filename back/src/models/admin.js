'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, select: false, required: true },
}, { versionKey: false });

module.exports = mongoose.model('Admin', AdminSchema)
