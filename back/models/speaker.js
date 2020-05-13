'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const TalksSchema = Schema({
    title: String,
    description: String,
    isRepeated: Boolean
})

const SpeakerSchema = Schema({
    email: { type: String, unique: true, lowercase: true },
    passwordHash: { type: String, select: false },
    name: String,
    biography: String,
    image: String,
    github: String,
    website: String,
    twitter: String,
    linkedin: String,
    registrationDate: { type: Date, default: Date.now() },
    talks: [TalksSchema] 
})

module.exports = mongoose.model('Speaker', SpeakerSchema)