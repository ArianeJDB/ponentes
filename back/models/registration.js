const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Speaker = require('./speaker.js')

const RegistrationSchema = Schema({
    email: String,
    password: String,
    name: String,
    biography: String,
    image: String,
    github?: String,
    website?: String,
    twitter?: String,
    linkedin?: String,
    talks: [Speaker.talks] 
})


