module.exports = (express, app) => {
    const routers = require('../routers')(express.Router());

    app.use('api/author', routers.authorRouter);
    app.use('/user', routers.userRouter);
    app.use('/', routers.homeRouter);
    app.use('api/book', routers.bookRouter);
    app.use('api/bookInstance', routers.bookInstanceRouter);
    app.use('api/genre', routers.genreRouter);
    app.use('*', (req, res, next) => res.send('<h1>Some problem....</h1>'))
};