var mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  commentBody: { type: String, required },
  commentOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  timestamp: { type: Date },
  upvotes: { type: Number, default: 1 },
  commentReplies: [ { type: mongoose.Schema.Types.ObjectId, ref: 'comment' } ]
});

module.exports = mongoose.model('comment', commentSchema);
