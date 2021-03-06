
module.exports = {
    get: {
        
        home(req, res, next) {
            console.log('logged home populate')
            return res.render('./home/home.hbs');
            return next();
        },

        populate(req, res, next) {
            res.render('./home/populate.hbs')
        }
    }
}