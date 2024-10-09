const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  counselorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Counselor', required: true },
  date: { type: Date, required: true },
  paymentMethod: { type: String, enum: ['online', 'on-site'], required: true },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;