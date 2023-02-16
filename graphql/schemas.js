import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemas = ['todo'];

const typeDefs = [];

// const todoDefs = fs.readFileSync('./todo/schema.graphql', 'utf-8');

for (let schema of schemas) {
  const file = path.join(__dirname, schema, 'schema.graphql');
  typeDefs.push(fs.readFileSync(file, 'utf-8'));
}

export default typeDefs.join('\n\n');
