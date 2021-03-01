const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const getAuthorModel = require('./Author');
const getBookModel = require('./Book');
const getBookInstanceModel = require('./BookInstance');
const getGenreModel = require('./Genre');
const getUserModel = require('./User');

module.exports = {
    Author: getAuthorModel(mongoose),
    Book: getBookModel(mongoose),
    BookInstance: getBookInstanceModel(mongoose),
    Genre: getGenreModel(mongoose),
    User: getUserModel(mongoose, bcrypt),
};