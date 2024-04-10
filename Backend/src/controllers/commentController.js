const Comment = require('../models/commentModel');

exports.getComments = async (req, res, next) => {
  try {
    const { storyId } = req.query;
    const comments = await Comment.find({ story: storyId }).sort({ score: -1 });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};