const User = require('../models/userModel');
const Story = require('../models/storyModel');

exports.getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('bookmarks')
      .lean();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.bookmarkStory = async (req, res, next) => {
  try {
    const { storyId } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (user.bookmarks.includes(storyId)) {
      return res.status(400).json({ error: 'Story already bookmarked' });
    }
    user.bookmarks.push(storyId);
    await user.save();
    res.status(201).json({ message: 'Story bookmarked' });
  } catch (error) {
    next(error);
  }
};