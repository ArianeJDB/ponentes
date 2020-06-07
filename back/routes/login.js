const loginController = require('../controllers/login')
const passport = require('passport');


const createLoginRouter = (router) => {
    router.post('/login', loginController)
    return router
}

module.exports = createLoginRouter;
