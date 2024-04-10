
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  storyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Story' },
  content: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
