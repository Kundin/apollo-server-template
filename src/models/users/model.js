/* eslint-disable func-names */

const { model } = require('mongoose');

const UsersSchema = require('./schema');

module.exports = model('Users', UsersSchema);
