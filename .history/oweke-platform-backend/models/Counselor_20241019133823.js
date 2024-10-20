// backend/models/Counselor.js
const mongoose = require('mongoose');

const CounselorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  availableSlots: [{ date: Date, time: String, isBooked: { type: Boolean, default: false } }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Counselor', CounselorSchema);