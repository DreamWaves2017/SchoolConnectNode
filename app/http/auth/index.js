
import express from 'express';
import {isString, omit, isUndefined} from 'lodash';
import bcrypt from 'bcrypt';

import {table} from 'app/orm';
import {login, logout} from 'app/auth';
import {Validator} from 'app/reducer';
import {isEmail} from 'app/util';

import {
  loggedIn,
  loggedOut,
  getAuthKeyFromRequest
} from 'app/auth/filters';

const app = express();

app.post('/login', loggedOut, async (req, res) => {
  const {email, password} = req.body;
  const {success, token, user} = await login(email, password);
  if (success) {
    const teams = await table('users')
      .where({id: user.id})
      .first()
    ;
    return res.status(200).send({msg: 'logged in', token, user: omit(user, ['password']), teams});
  } else {
    return res.status(400).send({email: 'Email password combination is invalid.'});
  }
});

app.post('/logout', loggedIn, async (req, res) => {
  const authKey = getAuthKeyFromRequest(req);
  await logout(authKey);
  return res.send({msg: 'logged out'});
});

async function alreadySignedUp(req, res, next) {
  if (!req.body.email || req.body.email.length === 0) {
    return next();
  }
  const existing = await table('users')
    .where({email: req.body.email})
    .all()
  ;
  if(existing.length > 0) {
    return res.status(409).send({email: ['Email already taken.']});
  } else {
    return next();
  }
}

const signUpValidator = new Validator({
  ['email'](email) {
    return (!isUndefined(email) && isEmail(email) && isString(email)) ? null : 'Email is invalid.';
  },
  ['name'](name) {
    return (!isUndefined(name) && name.length > 0 && isString(name)) ? null : 'Name is invalid.';
  },
  ['password'](password) {
    if(!isUndefined(password) && isString(password) && password.length > 4) {
      return null;
    } else {
      return 'Password should be atleast 5 characters long.';
    }
  }
});

app.post('/signup', alreadySignedUp, async (req, res) => {
  const errors = await signUpValidator.errors(req.body);
  if (errors) {
    return res.status(400).send(errors);
  }
  const {email, password, name} = req.body;

  const user = await table('users').insert({
    email: email.trim(),
    password: await new Promise((resolve) => bcrypt.hash(password, 10, (_, hash) => resolve(hash))),
    name: name.trim()
  });
  if (user) {
    return res.status(200).send({msg: 'Signup success.', user: omit(user, ['password'])});
  } else {
    return res.status(400).send({msg: 'Signup failed.'});
  }
});

export default app;

