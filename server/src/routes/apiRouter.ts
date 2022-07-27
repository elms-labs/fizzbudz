require ('dotenv').config();
const path = require('path');
const axios = require('axios');
import express, { Request, Response, RequestHandler } from 'express';
import authController from '../controllers/authController';
const app = express();
const router = express.Router();

app.use(express.static('static'));

app.get('/auth', (req:Request, res:Response) => {
    res.redirect(
        `http://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    );
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });

app.get('/oauth-callback', ({query: {code}}, res:Response) => {
  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_SECRET,
    code,
  };

  const opts = {headers: {accept: 'application/json'}};

  axios
  .post('https://github.com/login/oauth/access_token', body, opts)
  .then((_res) => _res.data.access_token)
  .then((token) => {
    console.log('My token: ', token);

    res.redirect(`/?token=${token}`);
  })
  .catch((err) => res.status(500).json({ err: err.message }));
});


export default router;