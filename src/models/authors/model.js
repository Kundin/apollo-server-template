/* eslint-disable func-names */

const { model } = require('mongoose');

const AuthorsSchema = require('./schema');

module.exports = model('Authors', AuthorsSchema);
