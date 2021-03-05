const {bookController} = require('../controllers')
module.exports = (router) => {
    /// BOOK ROUTES ///  
    
    router.get('/create', bookController.get.create);

    router.get('/delete/:bookId', bookController.get.delete);

    router.get('/detail/:bookId', bookController.get.detail);

    router.get('/all', bookController.get.all);

    router.get('/edit/:booId', bookController.get.edit);

    router.post('/create', bookController.post.create);

    router.post('/delete/:bookId', bookController.post.delete);

    router.post('/edit/:booId', bookController.post.edit);

    return router;
}