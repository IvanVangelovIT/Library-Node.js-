const {bookInstanceController} = require('../controllers');

module.exports = (router) => {      
    /// BOOKINSTANCE ROUTES ///

    router.get('/create', bookInstanceController.get.create);

    router.get('/:bookinstanceId', bookInstanceController.get.detail);

    router.get('/', bookInstanceController.get.all);

    router.get('/delete/:bookInstanceId', bookInstanceController.get.delete);

    router.get('/edit/:bookInstanceId', bookInstanceController.get.edit);

    router.post('/create', bookInstanceController.post.create);

    router.post('/delete/:bookInstanceId', bookInstanceController.post.delete);

    router.post('/edit', bookInstanceController.post.edit);

    return router;
}