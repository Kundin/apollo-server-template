const { gql } = require('apollo-server');

module.exports = gql`
  type Author {
    firstName: String

    lastName: String
  }
`;
