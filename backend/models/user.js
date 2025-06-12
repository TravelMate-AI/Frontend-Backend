const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Pastikan ini bcryptjs, bukan bcrypt

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true }); // Opsional: Tambahkan timestamps untuk createdAt, updatedAt

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10); // 10 adalah saltRounds, bagus.
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) { // Tambahkan async
  return await bcrypt.compare(enteredPassword, this.password); // Tambahkan await
};

module.exports = mongoose.model('User', userSchema);