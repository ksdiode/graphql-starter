import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import start from './graphql/index.js';

const app = express();
app.use(cors(), bodyParser.json());

await start(app);

await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);
