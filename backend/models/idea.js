const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  title: String,
  summary: String
});

module.exports = mongoose.model('Idea', ideaSchema);
