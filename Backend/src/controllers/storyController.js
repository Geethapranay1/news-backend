
const Story = require('../models/storyModel');

exports.getStoriesByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const stories = await Story.find({ category });
    res.json(stories);
  } catch (error) {
    console.error('Error fetching stories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
