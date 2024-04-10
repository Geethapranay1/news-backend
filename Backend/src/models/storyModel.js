const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  category: { type: String, required: true },
  score: { type: Number, required: true },
  commentsCount: { type: Number, required: true },
});

module.exports = mongoose.model('Story', storySchema);