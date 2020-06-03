const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    """
    add-books - может добавлять книги

    remove-books - может удалять книги

    edit-books - может редактировать книги
    """
    privilegies: [String]!

    givenName: String!

    familyName: String!

    name: String!

    photo: String

    email: String!

    books: [Book]
  }
`;
