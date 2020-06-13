const passport = require('passport');
const loginController = require('../controllers/login');


const createLoginRouter = (router) => {
  router.post('/login', passport.authenticate('basic', { session: false }), loginController);
  return router;
};

module.exports = createLoginRouter;
