const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    books(user: UserInput): [Book]

    user(email: String!): User

    library: [Book]
  }
`;
