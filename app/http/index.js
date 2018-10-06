
import express from 'express';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import cors from 'cors';

import {loggedIn} from 'app/auth/filters';
import auth from './auth';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json({limit: '50mb'}));
// parse multipart-form-data
app.use(cors());
// handle errors, should only be enabled in dev, but everything is dev
// right now
app.use(errorhandler());

if (process.env.NODE_ENV === 'production') {
  // trust proxy in production from local nginx front server
  app.set('trust proxy', 'loopback');
}
app.use('/auth', auth);

app.get('/', (req, res) => {
  res.send({msg: 'Nodejs is live. Lets go and chanage the world.'});
});

app.use(loggedIn);

// catch all route
app.all('*', (req, res) => {
  res.status(404).send({msg: 'not found'});
});
export default app;

