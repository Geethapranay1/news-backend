
const User = require('../models/userModel');

exports.getUserProfile = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const submissions = await Story.find({ userId });
    const comments = await Comment.find({ userId });
    //.....

    res.json({submissions, comments});
  } catch (error) {
    console.error(`Error fetching profile for user ${userId}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
