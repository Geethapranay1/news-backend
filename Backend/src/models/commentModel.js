const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  story: { type: mongoose.Schema.Types.ObjectId, ref: 'Story', required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  score: { type: Number, required: true },
});

module.exports = mongoose.model('Comment', commentSchema);