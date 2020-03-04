const { gql } = require('apollo-server');

module.exports = gql`
  type Test {
    test: String
  }
`;
