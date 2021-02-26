import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyparser from 'body-parser';
import router from './server/routes/router';
import PORT from './server/config/port';

// APP
const app = express();

// MIDDLEWARE
// app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({ extended: true }));

// TEMPLATE ENGINE
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));

// STATIC PATHS
app.use('/public', express.static(path.resolve(__dirname, 'public')));

// ROUTES
app.use('/', router);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
