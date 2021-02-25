import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyparser from 'body-parser';
import path from 'path';
import router from './server/routes/router';

const app = express();

dotenv.config({ path: '/.env' });
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));

app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
