const {Author} = require('../models')

module.exports = {
    get: {
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
        },

        create(req, res, next) {
            res.render('./author/create.hbs')
        },

        edit(req, res, nexr){

            const {authorId} = req.params;

            Author
            .findOne({ _id: authorId})
            .then((author) => {
                console.log(author);
                res.render('./author/edit.hbs', author);
            })
            .catch((err) => console.log(err))
        },

        details(req,res, next) {

            const {authorId} = req.params;

            Author
                .findOne({_id: authorId})
                .lean()
                .then((author) => {
                    res.render('./author/details.hbs', {...author})
                })
        }, 

        delete(req, res, next) {
            Author
                .findOne({_id: req.params.authorId})
                .lean()
                .then((author) => {
                    res.render('./author/delete.hbs', {...author})
                })
        },

        update(req, res, next) {
            Author
            .updateOne({_id: req})
            .then((author) => {
                res.redirect()
            })
            .catch((err) => cons)
        },

            
    },

    post: {
        
        create(req, res, next) {
            const {first_name, family_name, date_of_birth, date_of_death} = req.body;
            
            Author
            .create({...req.body})
            .then((author) => {
                console.log(author);
                res.redirect('./all')
            })
        },

      
        post(req, res, next) {

        },

        update(req, res, next) {

        },

        edit(req, res, next) {
            
            const {authorId} = req.params;

            Author
                .updateOne(
                    {_id: authorId},
                    {$set: {...req.body}}
                )
                .then((udatedAuthorauthor) => {
                    res.redirect(`/author/details/${authorId}`)
                })
        }
    }
}