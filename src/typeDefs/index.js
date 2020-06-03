const { gql } = require('apollo-server');

const UserInput = require('../inputs/UserInput');

const Author = require('./Author');
const Book = require('./Book');
const Query = require('./Query');
const User = require('./User');

module.exports = gql`
  ${UserInput}

  ${Author}
  ${Book}
  ${Query}
  ${User}
`;
