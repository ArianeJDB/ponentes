'use strict';

const express = require('express')
const passport = require('passport');
const speakerController = require('../controllers/speakers')
const api = express.Router()

api.get('/speakers', speakerController.getSpeakers)
api.get('/speakers/:speakerId', speakerController.getOneSpeaker)
api.post('/registration', speakerController.createSpeaker)
api.put('/speakers/:speakerId', passport.authenticate('jwt', { session: false }), speakerController.updateSpeaker)
api.delete('/speakers/:speakerId',  passport.authenticate('jwt', { session: false }), speakerController.deleteSpeaker)

api.post('/speakers/:speakerId',  passport.authenticate('jwt', { session: false }), speakerController.addTalk)
api.put('/speakers/:speakerId/talks/:talkId',  passport.authenticate('jwt', { session: false }), speakerController.updateTalk)
api.delete('/speakers/:speakerId/talks/:talkId',  passport.authenticate('jwt', { session: false }), speakerController.deleteTalk)



module.exports = api