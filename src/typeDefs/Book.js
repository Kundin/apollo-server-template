const { gql } = require('apollo-server');

module.exports = gql`
  type Book {
    """
    electronic - есть электронная версия

    paper - есть бумажная версия
    """
    types: [String]!

    cover: String!

    title: String!

    author: Author!

    description: String
  }
`;
