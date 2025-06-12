const express = require('express');
const router = express.Router();
const { chatWithAI } = require('../controllers/chatController');
const authMiddleware = require('../middleware/authmiddleware');

router.post('/', authMiddleware, chatWithAI);

module.exports = router;
