const app = require('express').Router();
const { routes } = require('../../shared');
const { contact } = require('../modules');
const error = require('../helpers/error');

app[routes.contact.method](routes.contact.url, async(req, resp) => {
  console.log(req.body);
  await contact.send('rchin@rogerchin.dev', {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }, req.body.detail)
  .then(() => resp.status(200).send())
  .catch(err => error.log(err, req, resp));
});

module.exports = app;