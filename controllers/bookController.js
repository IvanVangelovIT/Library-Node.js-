const {Book} = require('../models')

module.exports = {
    get: {
        create(req, res, next) {
            Book
            .Find({})
            .lean()
            .populate('author', 'first_name', 'family_name')
            .then((books) => {
                res.render('./bookTESTSTTSTS/all.hbs', {
                    books
                })
            })
        },
        delete(req, res, next) {
        
        },
        edit(req, res, next) {

        },
        detail(req,res, next) {

        },
        all(req, res, next) {
            const book = Book
            .find({}, 'title author')
            .populate('author')
            .then((books) => {
                res.render('./book/all.hbs', {
                    title: 'Book List',
                    books
                });
            })
            .catch((err) => console.log(err))
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