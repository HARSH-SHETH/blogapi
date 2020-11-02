var app = require('express').Router();

app.get('/', (req, res) => {
  res.send("This is my blog");
});

module.exports = app;
