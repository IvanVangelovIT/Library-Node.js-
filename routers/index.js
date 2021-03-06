const routers = [
    { authorRouter: require('./authorRouter') },
    { bookRouter: require('./bookRouter') },
    { bookInstanceRouter: require('./bookInstanceRouter') },
    { genreRouter: require('./genreRouter') },
    { homeRouter: require('./homeRouter') },
    { userRouter: require('./userRouter') },
    { populateRouter: require('./populateRouter')}
];

module.exports = (router) => {
    return routers.reduce((acc, curr) => {
        const key = Object.keys(curr)[0];
        return Object.assign(acc, { [key]: curr[key](router) });
    }, {});
};
