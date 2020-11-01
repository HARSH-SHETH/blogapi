const express = require('express')
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

// mongoose configuration
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});

const db = mongoose.connection; // return mongoose connection instance
db.on('error', function(err){
  if(err){
    console.log("mongoose connection error!!!");
  }
});

db.on('connected', () => console.log("Connected to mongodb :)"));

app.listen(process.env.PORT, () => {
  console.log("yeah listening");
});

