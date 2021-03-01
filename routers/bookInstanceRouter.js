const {bookInstanceController} = require('../controllers');

module.exports = (router) => {      
    /// BOOKINSTANCE ROUTES ///

    // GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
    router.get('/bookinstance/create', bookInstanceController.get.create);
    // GET request for one BookInstance.
    router.get('/bookinstance/:id', bookInstanceController.get.detail);
    // GET request for list of all BookInstance.
    router.get('/bookinstances', bookInstanceController.get.all);
    // GET request to delete BookInstance.
    router.get('/bookinstance/:id/delete', bookInstanceController.get.delete);
    // GET request to update BookInstance.
    router.get('/bookinstance/:id/update', bookInstanceController.get.update);

    // POST request for creating BookInstance.
    router.post('/bookinstance/create', bookInstanceController.post.create);
    // POST request to delete BookInstance.
    router.post('/bookinstance/:id/delete', bookInstanceController.post.delete);
    // POST request to update BookInstance.
    router.post('/bookinstance/:id/update', bookInstanceController.post.update);

    return router;
}