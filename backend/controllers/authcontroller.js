const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1d' });
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already used' });

    const user = await User.create({ name, email, password });

    // Perbaikan: Setelah register, kirim token juga agar frontend bisa auto-login
    const token = generateToken(user);
    res.status(201).json({
      message: 'Registration successful',
      token: `Bearer ${token}`, // Sertakan token
      user: { id: user._id, name: user.name, email: user.email } // Sertakan user data
    });

  } catch (err) {
    // Perbaikan: Pesan error lebih spesifik untuk validasi Mongoose (misal unique)
    if (err.code === 11000) { // Error code for duplicate key (unique index)
        return res.status(400).json({ message: 'Email already registered' });
    }
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user);
    // Perbaikan: Sertakan user data juga
    res.json({
      token: `Bearer ${token}`,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};