const { ApolloServer } = require('apollo-server');

// function server() {
//   const serverApollo = new ApolloServer({
//     typeDefs: typeDefs,
//     resolvers: resolvers,
//     plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], // this is the most important thing
//   });
//   serverApollo.listen().then(({ url }) => {
//     console.log(`Playground on: ${url}`);
//   });
// }

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
  });
}

startApolloServer(typeDefs, resolvers);
