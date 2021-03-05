module.exports = (express, app) => {
    const routers = require('../routers')(express.Router());

    app.use('/', (req, res, next) => res.render('./home/home.hbs'));
    app.use('/author', routers.authorRouter);
    app.use('/user', routers.userRouter);
    app.use('/book', routers.bookRouter);
    app.use('/bookInstance', routers.bookInstanceRouter);
    app.use('/genre', routers.genreRouter);
    app.use('*', (req, res, next) => res.send('<h1>Some problem occured, please let the adinistrator sleep ;(</h1>'))
};