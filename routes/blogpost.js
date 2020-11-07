const app = require('express').Router();
const userModel = require('../models/user.js');
const blogpostModel = require('../models/blogpost.js');
const commentModel = require('../models/comment.js');

app.get('/', (req, res) => {
  blogpostModel.find({}).populate('comments').exec(function(err, results){
    if(err){
      res.send("failed");
    }
    res.json(results);
  });
});

module.exports = app;
