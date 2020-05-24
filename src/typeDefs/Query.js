const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    library: [Book]

    me: User
  }
`;
