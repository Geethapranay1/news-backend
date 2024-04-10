const Story = require('../models/storyModel');

exports.getStories = async (req, res, next) => {
  try {
    const { category } = req.query;
    let stories;
    if (category) {
      stories = await Story.find({ category }).sort({ score: -1 });
    } else {
      stories = await Story.find().sort({ score: -1 });
    }
    res.status(200).json(stories);
  } catch (error) {
    next(error);
  }
};