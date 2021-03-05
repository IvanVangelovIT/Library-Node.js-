const {BookInstance} = require('../models')

module.exports = {
    get: {
        create(req, res, next) {
            res.render('')
        },
        delete(req, res, next) {
        
        },
        edit(req, res, next) {

        },
        detail(req,res, next) {

        },
        all(req, res, next) {

            const book = BookInstance
            .find()
            .lean()
            .populate('book')
            .exec(function (err, bookinstances) {
              if (err) { return next(err); }
              // Successful, so render
              res.render('./bookinstance/all.hbs', { title: 'Book Instance List', bookinstances });
            });
        }
    },

    post: {
        create(req, res, next) {

        },
        delete(req, res, next) {

        },
        post(req, res, next) {

        },
        edit(req, res, next) {

        }
    }
}