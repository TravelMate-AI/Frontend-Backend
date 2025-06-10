exports.chatWithAI = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Message is required' });
  }

  const reply = `Berikut itinerary untuk "${message}":\nHari 1: Pantai Kuta\nHari 2: Ubud dan sawah terasering\nHari 3: Tanah Lot dan belanja oleh-oleh`;

  res.json({ reply });
};
