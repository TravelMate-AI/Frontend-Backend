const express = require('express');
const router = express.Router();
const { getGuides } = require('../controllers/guideController');

router.get('/', getGuides);

module.exports = router;
