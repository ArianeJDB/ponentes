'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TalksSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: String,
    isRepeated: { type: Boolean, default: false }
}, { versionKey: false })

const SpeakerSchema = new Schema({
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, select: false, required: true },
    name: String,
    biography: String,
    image: String,
    github: String,
    website: String,
    twitter: String,
    linkedin: String,
    created_at: { type: Date, default: Date.now() },
    talks: [TalksSchema]
}, { versionKey: false }) // con esto no se guarda el atributo _v

module.exports = mongoose.model('Speaker', SpeakerSchema)
