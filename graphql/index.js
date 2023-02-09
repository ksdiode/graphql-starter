import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';

import http from 'http';
import resolvers from './resolvers.js';
import fs from 'fs';

const typeDefs = fs.readFileSync('./graphql/schema.graphql', 'utf-8');

async function start(app, playground = '/graphql') {
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(playground, expressMiddleware(server));
  return server;
}

export default start;
