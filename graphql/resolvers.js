// const todoResolver = require('./todo/resolver.js')
import todoResolver from './todo/resolver.js';

const resolvers = {
  Query: {
    ...todoResolver.Query,
  },
  Mutation: {
    ...todoResolver.Mutation,
  },
};

export default resolvers;
