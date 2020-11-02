var app = require('express').Router();

app.get('/', (req, res) => {
  res.send('welcome to my blog route');
});

module.exports = app;
