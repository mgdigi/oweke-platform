// backend/routes/appointment.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const Counselor = require('../models/Counselor');

// Create a new appointment
router.post('/', async (req, res) => {
  const { counselorId, clientName, clientEmail, slot, paymentMethod, isPaid } = req.body;

  if (!isPaid) {
    return res.status(400).json({ error: 'Payment not completed' });
  }

  const counselor = await Counselor.findById(counselorId);
  const availableSlot = counselor.availableSlots.find(s => s.date === slot.date && s.time === slot.time && !s.isBooked);

  if (!availableSlot) {
    return res.status(400).json({ error: 'Slot not available' });
  }

  const newAppointment = new Appointment({
    counselor: counselorId,
    clientName,
    clientEmail,
    slot,
    pricePaid: counselor.price,
    paymentMethod,
    isPaid
  });

  availableSlot.isBooked = true;
  await counselor.save();
  await newAppointment.save();

  res.json(newAppointment);
});

module.exports = router;