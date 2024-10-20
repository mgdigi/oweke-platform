// backend/models/Appointment.js
const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  counselor: { type: mongoose.Schema.Types.ObjectId, ref: 'Counselor', required: true },
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  slot: { date: Date, time: String, required: true },
  pricePaid: { type: Number, required: true },
  paymentMethod: { type: String, required: true },  // 'online' or 'on-site'
  isPaid: { type: Boolean, default: false }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);