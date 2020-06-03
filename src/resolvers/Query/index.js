const books = require('./books');
const library = require('./library');
const user = require('./user');

module.exports = {
  Query: {
    books,
    library,
    user,
  },
};
