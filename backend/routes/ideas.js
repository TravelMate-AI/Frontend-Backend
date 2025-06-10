const express = require('express');
const router = express.Router();
const { getIdeas } = require('../controllers/ideaController');

router.get('/', getIdeas);

module.exports = router;
