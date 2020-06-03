/* eslint-disable func-names */

const { model } = require('mongoose');

const BooksSchema = require('./schema');

module.exports = model('Books', BooksSchema);
