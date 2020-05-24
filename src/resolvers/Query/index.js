const books = require('./books');
const me = require('./me');
const myBooks = require('./myBooks');

module.exports = {
  Query: {
    books,
    me,
    myBooks,
  },
};
