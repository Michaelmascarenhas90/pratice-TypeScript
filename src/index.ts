import express from 'express';
import routes from './routes';

const app = express();

const name: string = 'Michael Mascarenhas'

app.use(routes)

app.listen(3333);
