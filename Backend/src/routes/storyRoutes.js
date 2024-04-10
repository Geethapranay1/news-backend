const express = require('express');
const storyController = require('../controllers/storyController');

const router = express.Router();

router.get('/', storyController.getStories);

module.exports = router;