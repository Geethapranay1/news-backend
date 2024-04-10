
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:userId/profile', userController.getUserProfile);

module.exports = router;