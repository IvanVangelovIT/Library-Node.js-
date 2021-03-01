const {authorController} = require('../controllers')

module.exports = (router) => {
    /// AUTHOR ROUTES ///

    // GET request for creating Author. NOTE This must come before route for id (i.e. display author).
    router.get('/author/create', authorController.get.create);
    // GET request to delete Author.
    router.get('/author/:id/delete', authorController.get.delete);
    // GET request to update Author.
    router.get('/author/:id/update', authorController.get.update);
    // GET request for one Author.
    router.get('/author/:authorId', authorController.get.details);
    // GET request for list of all Authors. 

    //TODO changed list to all
    router.get('/authors', authorController.get.all);

    // POST request for creating Author.
    router.post('/author/create', authorController.post.create);
    // POST request to delete Author.
    router.post('/author/:id/delete', authorController.post.delete);
    // POST request to update Author.
    router.post('/author/:id/update', authorController.post.update);

    return router;
}