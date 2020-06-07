const adminController = require('../controllers/admin')

const createAdminRouter = (router) => {
    router.get('/admin', adminController.getAdmin),
    router.post('/admin', adminController.createAdmin)
}

module.exports = createAdminRouter;
