
const Comment = require('../models/commentModel');

exports.getCommentsForStory = async (req, res) => {
  const { storyId } = req.params;
  try {
    const comments = await Comment.find({ storyId });
    res.json(comments);
  } catch (error) {
    console.error(`Error fetching comments for story ${storyId}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
