const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  eventId: String,
  userName: String,
  userEmail: String,
  bookingDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);