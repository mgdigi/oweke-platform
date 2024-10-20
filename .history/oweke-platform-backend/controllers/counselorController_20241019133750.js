// backend/controllers/counselorController.js
const Counselor = require('../models/Counselor');

// Get all counselors
exports.getAllCounselors = async (req, res) => {
  const counselors = await Counselor.find();
  res.json(counselors);
};

// Search by specialty
exports.searchBySpecialty = async (req, res) => {
  const { specialty } = req.query;
  const counselors = await Counselor.find({ specialty: { $regex: specialty, $options: 'i' } });
  res.json(counselors);
};

// Get counselor by ID
exports.getCounselorById = async (req, res) => {
  const counselor = await Counselor.findById(req.params.id);
  res.json(counselor);
};