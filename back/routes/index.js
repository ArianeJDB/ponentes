'use strict';

const express = require('express')
const speakerController = require('../controllers/speakers')
const api = express.Router()

api.get('/speakers', speakerController.getSpeakers)
api.get('/speakers/:speakerId', speakerController.getOneSpeaker)
api.post('/speakers', speakerController.createSpeaker)
api.put('/speakers/:speakerId', speakerController.updateSpeaker)
api.delete('/speakers/:speakerId', speakerController.deleteSpeaker)

module.exports = api