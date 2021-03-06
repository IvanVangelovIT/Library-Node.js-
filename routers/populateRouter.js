const {populateController} = require('../controllers');

module.exports = (router) => {
    router.get('/home', populateController.get.home);
    router.get('/', populateController.get.populate);

    return router;
}