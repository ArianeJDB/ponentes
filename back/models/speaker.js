'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TalksSchema = Schema({
    title: String,
    description: String,
    isRepeated: Boolean
})

const SpeakerSchema = Schema({
    email: String,
    name: String,
    biography: String,
    image: String,
    github: String,
    website: String,
    twitter: String,
    linkedin: String,
    talks: [TalksSchema] 
})

module.exports = mongoose.model('Speaker', SpeakerSchema)