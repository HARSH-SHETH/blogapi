const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required, minlength: 5 },
  content: { type: String, required },
  timestamp: { type: Date, required },
  comments: [ { type: mongoose.Schema.Types.ObjectId, ref: 'comment' } ],
  isPublished: { type: Boolean, default: false }
});

module.exports = mongoose.model('blogpost', blogPostSchema);
