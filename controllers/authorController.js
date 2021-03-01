const {Author} = require('../models')

module.exports = {
    get: {
        create(req, res, next) {
            res.render('./author/create.hbs')
        },
        delete(req, res, next) {
        
        },
        update(req, res, next) {

        },
        details(req,res, next) {

            Author
                .findOne({id: req.params.authorId})
                .lean()
                .then((author) => {
                    res.render('./author/details.hbs', {...author})
                })
        },
        all(req, res, next) {

            Author
                .find({})
                .lean()
                .then((authors) => {
                    console.log(authors);
                    res.render('./author/all.hbs', {
                        authors
                    })
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
        update(req, res, next) {

        }
    }
}