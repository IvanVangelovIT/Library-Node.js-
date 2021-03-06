const {BookInstance} = require('../models')

module.exports = {
    get: {
        create(req, res, next) {
            res.render('')
        },
        delete(req, res, next) {
              //TODO
        },
        edit(req, res, next) {
              //TODO
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
              //TODO
        },
        delete(req, res, next) {
              //TODO
        },
        post(req, res, next) {
              //TODO
        },
        edit(req, res, next) {
              //TODO
        }
    }
}