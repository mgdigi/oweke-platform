const Appointment = require('../models/Appointment');

// Book an appointment
const bookAppointment = async (req, res) => {
  const { counselorId, date, paymentMethod } = req.body;
  try {
    const newAppointment = new Appointment({ counselorId, date, paymentMethod });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { bookAppointment };