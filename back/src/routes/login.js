const passport = require('passport');
const loginController = require('../controllers/login');


const createLoginRouter = (router) => {
  router.post('/login', loginController);
  return router;
};

module.exports = createLoginRouter;
