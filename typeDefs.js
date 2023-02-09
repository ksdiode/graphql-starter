import fs from 'fs';

const films = fs.readFileSync('./graphql/films.graphql', 'utf-8');
console.log(films);

// The GraphQL schema
const typeDefs = `#graphql 
  ${films} 
`;

export default typeDefs;
