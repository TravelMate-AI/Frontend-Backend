const express = require('express');
const router = express.Router();
const { getGuides } = require('../controllers/guidescontroller');

router.get('/', getGuides);

module.exports = router;
