const { gql } = require('apollo-server');

module.exports = gql`
  input UserInput {
    email: String!
  }
`;
