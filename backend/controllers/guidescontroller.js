const Guide = require('../models/guide');

exports.getGuides = async (req, res) => {
  try {
    const guides = await Guide.find();
    res.json(guides);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch guides', error: err.message });
  }
};
