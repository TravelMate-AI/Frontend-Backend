const express = require('express');
const router = express.Router();
const { getIdeas } = require('../controllers/ideascontroller');

router.get('/', getIdeas);

module.exports = router;
