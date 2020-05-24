const { gql } = require('apollo-server');

const Author = require('./Author');
const Book = require('./Book');
const Query = require('./Query');
const User = require('./User');

module.exports = gql`
  ${Author}
  ${Book}
  ${Query}
  ${User}
`;
