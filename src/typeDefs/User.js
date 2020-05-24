const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    """
    add-books - может добавлять книги

    remove-books - может удалять книги

    edit-books - может редактировать книги
    """
    privilegies: [String]!

    firstName: String!

    lastName: String!

    books: [Book]
  }
`;
