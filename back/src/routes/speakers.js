
const passport = require('passport');
const speakerController = require('../controllers/speakers');
const talkController = require('../controllers/talks');

const createSpeakersController = (router) => {
  router.get('/speakers', speakerController.getSpeakers);
  router.get('/speakers/:speakerId', speakerController.getOneSpeaker);
  router.post('/register', speakerController.createSpeaker);
  router.put('/speakers/:speakerId', passport.authenticate('jwt', { session: false }), speakerController.updateSpeaker);
  router.delete('/speakers/:speakerId', passport.authenticate('jwt', { session: false }), speakerController.deleteSpeaker);

  router.post('/speakers/:speakerId/talks', passport.authenticate('jwt', { session: false }), talkController.addTalk);
  router.put('/speakers/:speakerId/talks/:talkId', passport.authenticate('jwt', { session: false }), talkController.updateTalk);
  router.delete('/speakers/:speakerId/talks/:talkId', passport.authenticate('jwt', { session: false }), talkController.deleteTalk);
  return router;
};

module.exports = createSpeakersController;
