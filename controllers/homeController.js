const async = require('async');
const {Book} = require('../models')
const {BookInstance} = require('../models')
const {Author} = require('../models')
const {Genre} = require('../models')

module.exports = {
    get: {
        home(req, res, next) {
            async.parallel({
                bookCount: function(callback) {
                    Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
                },
                bookInstanceCount: function(callback) {
                    BookInstance.countDocuments({}, callback);
                },
                bookInstanceAvailableCount: function(callback) {
                    BookInstance.countDocuments({status:'Available'}, callback);
                },
                authorCount: function(callback) {
                    Author.countDocuments({}, callback);
                },
                genreCount: function(callback) {
                    Genre.countDocuments({}, callback);
                }
            }, function(err, results) {
                res.render('./home/home.hbs', { title: 'Local Library Home', error: err, data: results });
            });

        },
    }
};
