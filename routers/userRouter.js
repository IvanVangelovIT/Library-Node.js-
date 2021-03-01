const { userController } = require('../controllers');

module.exports = (router) => {
    router.get('/login', userController.get.login);
    router.get('/register', userController.get.register);
    router.get('/profile', userController.get.profile);
    router.get('/logout', userController.get.logout);
    router.get('/all', userController.get.all);

    router.post('/register', userController.post.register);
    router.post('/login', userController.post.login);
   // router.post('/logout', userController.post.logout);
    //router.put('/:id', userController.put);

    //router.delete('/:id', userController.delete);

    return router;
};