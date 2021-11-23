const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    bookCount: Int
    savedBooks: [Book]
    email: String!
  }
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image:String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }
  input bookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, password: String!, email: String!): Auth
    saveBook(bookData: bookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
