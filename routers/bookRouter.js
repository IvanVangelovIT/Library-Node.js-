const {bookController} = require('../controllers')
module.exports = (router) => {
    /// BOOK ROUTES ///

    //// GET catalog home page.
    //router.get('/', book_controller.index);
    
    
    
    // GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
    router.get('/book/create', bookController.get.create);
    // GET request to delete Book.
    router.get('/book/:id/delete', bookController.get.delete);
    // GET request for one Book.
    router.get('/book/:id', bookController.get.detail);
    // GET request for list of all Book items.
    router.get('/books', bookController.get.all);
    // GET request to update Book.
    router.get('/book/:id/update', bookController.get.update);

    // POST request for creating Book.
    router.post('/book/create', bookController.post.create);
    // POST request to delete Book.
    router.post('/book/:id/delete', bookController.post.delete);
    // POST request to update Book.
    router.post('/book/:id/update', bookController.post.update);

    return router;
}