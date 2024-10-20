const mongoose = require('mongoose');

const counselorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  availability: [{ type: Date }],
});

const Counselor = mongoose.model('Counselor', counselorSchema);
module.exports = Counselor;a