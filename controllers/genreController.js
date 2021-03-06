const {Genre} = require('../models')

module.exports = {
    get: {
        create(req, res, next) {
            res.render('./genre/create.hbs')
        },
        delete(req, res, next) {
            res.render('./genre/delete.hbs')
        },
        update(req, res, next) {
            res.render('./genre/update.hbs')
        },
        detail(req,res, next) {
            res.render('./genre/detail.hbs')
        },
        all(req, res, next) {
            res.render('./genre/all.hbs')
        }
    },

    post: {
        create(req, res, next) {
            const { genreName } = { ...req.body };

            Genre
               .findOne({name: genreName})
               .lean()
               .then((genre) => {
                   if(genre) {
                       throw new Error('There is such genre')
                   }
                   return Genre.create({name: genreName})
               })
               .then((createdGenre) => {
                    res.redirect('/user/login');
               })
               .catch((e) => {
                    console.log(e);
                    res.redirect('/user/register');
               });

        },
        delete(req, res, next) {

            Genre
                .delete({_id: req.params.genreId})
                .then((result) => {
                    res.redirect('./genre/all.hbs');
                })
        },
        post(req, res, next) {
              //TODO
        },
        update(req, res, next) {
              //TODO
        }
    }
}