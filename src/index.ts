import path from 'path';
import express, { RequestHandler } from 'express';
import staticify from '@andrewsantarin/staticify';
import morgan from 'morgan';
import dotenv from 'dotenv';
import open from 'open';

dotenv.config();

const __ENV__ = (process.env.NODE_ENV || '').toLowerCase();
const __DEV__ = __ENV__ === 'development';
const __PORT__ = Number(process.env.PORT) || 8080;

const app = express();

app.set('views', path.join(__dirname, '..', 'dist', 'views'));
app.set('view engine', 'pug');

app.use(morgan('dev'));

const staticified = staticify(path.join(__dirname, '..', 'dist', 'public'), { pathPrefix: '/static' });

app.use((req, res, next) => {
  if (__DEV__) staticified.refresh();
  next();
});

app.use('/static', staticified.middleware);
app.locals = { staticPath: staticified.getVersionedPath };

const renderIndex: RequestHandler = (req, res) => res.render('index');;

app.get('/', renderIndex);

const server = app.listen(__PORT__);
server.on('listening', () => {
  const url = `http://localhost:${__PORT__}`;

  console.log('');
  console.log('-----------------------');
  console.log(`Server evironment mode: ${__ENV__}`)
  console.log(`Server is now running on ${url}`);
  console.log('-----------------------');
  console.log('');

  if (__DEV__) return;

  console.log(`Opening ${url} on your default browser...`);
  console.log('');
  console.log('');

  open(url);
});
