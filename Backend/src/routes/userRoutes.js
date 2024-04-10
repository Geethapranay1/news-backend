const express = require('express');
const userController = require('../controllers/userController');
const { authenticate } = require('../utils/auth');

const router = express.Router();

router.get('/:id', userController.getUserProfile);
router.post('/bookmarks', authenticate, userController.bookmarkStory);

module.exports = router;