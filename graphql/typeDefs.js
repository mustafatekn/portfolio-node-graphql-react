const { gql } = require("apollo-server-express");
module.exports = gql`
scalar Upload
  type User {
    username: String!
    email: String!
    createdAt: String!
    token: String
  }

  type Post{
    description:String
    imageUrl:String!
  }

  type Query {
    getUsers: [User]!
    login(username: String!, password: String!): User!
    getMessages: [Message!]
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Message{
    id: ID!
    subject:String!
    email:String!
    content:String!
    createdAt: String!
  }
  
  type Mutation {
    createUser(
      username:String!
      email:String!
      password:String!
      confirmPassword:String!
    ):User!
    sharePost(
      description:String
      imageUrl:String!
    ):Post!
    sendMessage(
      subject:String!
      email:String!
      content:String!
    ):Message!
    uploadFile(file: Upload!): File
  }
`;
