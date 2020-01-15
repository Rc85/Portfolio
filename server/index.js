require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT;
const path = require('path');
const Sentry = require('@sentry/node');
Sentry.init({dsn: process.env.SENTRY_DSN});
const middlewares = require('./middlewares');

app.use(bodyParser.urlencoded({limit: '24mb', extended: true}));
app.use(bodyParser.json({limit: '24mb', extended: true}));
app.use(express.static(path.resolve('./client/dist')));
app.use('/fonts', express.static(path.resolve('./client/assets/fonts')));
app.use('/images', express.static(path.resolve('./client/assets/images')));

app.get(/^\/(?!api)/, (req, resp) => {
  resp.sendFile(path.resolve('./client/dist/index.html'));
});

app.use(middlewares);

server.listen(port, (err) => {
  if (err) return console.log(err);

  return console.log(`${process.env.NODE_ENV} server running on port ${port}`);
});