const {authorController} = require('../controllers')

module.exports = (router) => {
    /// AUTHOR ROUTES ///

    // GET request for creating Author. NOTE This must come before route for id (i.e. display author).
    router.get('/create', authorController.get.create);
    // GET request to delete Author.
    router.get('/all', authorController.get.all);
    // GET request to delete Author.
    router.get('/delete/:authorId', authorController.get.delete);
    // GET request for one Author.
    router.get('/details/:authorId', authorController.get.details);
    router.get('/edit/:authorId', authorController.get.edit);

    // POST request for creating Author.
    router.post('/create', authorController.post.create);
    // POST request to delete Author.
    router.post('/delete/:authorId', authorController.post.delete);
    // POST request to update Author.
    router.post('/edit/:authorId', authorController.post.edit);
    // POST request to update Author.


    return router;
}