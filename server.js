const express = require('express')
const { ApolloServer } = require("apollo-server-express");
const { sequelize } = require("./models");
const {graphqlUploadExpress} = require('graphql-upload')
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const contextMiddleware = require('./util/contextMiddleware')

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: contextMiddleware,
  });
  await server.start();

  const app = express();

  server.applyMiddleware({ app });
  app.use(graphqlUploadExpress);


  await new Promise(r => app.listen({ port: 4000 }, r));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startServer();
