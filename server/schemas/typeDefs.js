const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    bookCount: Int
    savedBooks: [Book]
    email: String!
  }
  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    link: String
  }
  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(username: String!, password: String!, email: String!): Auth

    savedBooks(bookData: Book!): User

    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
