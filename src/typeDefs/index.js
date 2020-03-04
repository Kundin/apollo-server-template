const { gql } = require('apollo-server');

const Query = require('./Query');
const Test = require('./Test');

module.exports = gql`
  ${Query}
  ${Test}
`;
