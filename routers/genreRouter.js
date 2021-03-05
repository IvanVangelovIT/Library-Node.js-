const {genreController} = require('../controllers');

module.exports = (router) => {
    /// GENRE ROUTES ///

    router.get('/genre/create', genreController.get.create);

    router.get('/genre/:id/delete', genreController.get.delete);

    router.get('/genre/:id/update', genreController.get.update);

    router.get('/genre/:id', genreController.get.detail);

    router.get('/genres', genreController.get.all);


    router.post('/genre/create', genreController.post.create);

    router.post('/genre/:id/delete', genreController.post.delete);

    router.post('/genre/:id/update', genreController.post.update);

    return router;
}