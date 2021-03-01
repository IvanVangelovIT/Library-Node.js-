const {genreController} = require('../controllers');

module.exports = (router) => {
    /// GENRE ROUTES ///

    // GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
    router.get('/genre/create', genreController.get.create);
    // GET request to delete Genre.
    router.get('/genre/:id/delete', genreController.get.delete);
    // GET request to update Genre.
    router.get('/genre/:id/update', genreController.get.update);
    // GET request for one Genre.
    router.get('/genre/:id', genreController.get.detail);
    // GET request for list of all Genre.
    router.get('/genres', genreController.get.all);

    //POST request for creating Genre.
    router.post('/genre/create', genreController.post.create);
    // POST request to delete Genre.
    router.post('/genre/:id/delete', genreController.post.delete);
    // POST request to update Genre.
    router.post('/genre/:id/update', genreController.post.update);

    return router;
}