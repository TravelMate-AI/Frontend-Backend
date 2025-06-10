const Idea = require('../models/Idea');

exports.getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch ideas', error: err.message });
  }
};
