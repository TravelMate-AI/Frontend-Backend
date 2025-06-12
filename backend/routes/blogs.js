const express = require('express');
const router = express.Router();
const { getBlogs } = require('../controllers/blogscontroller');

router.get('/', getBlogs);

module.exports = router;
