const Counselor = require('../models/Counselor');

// Fetch all counselors
const getAllCounselors = async (req, res) => {
  try {
    const counselors = await Counselor.find();
    res.json(counselors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch counselor by ID
const getCounselorById = async (req, res) => {
  try {
    const counselor = await Counselor.findById(req.params.id);
    if (!counselor) return res.status(404).json({ message: 'Counselor not found' });
    res.json(counselor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new counselor
const createCounselor = async (req, res) => {
  const { name, specialty, description, price, availability } = req.body;
  try {
    const newCounselor = new Counselor({ name, specialty, description, price, availability });
    await newCounselor.save();
    res.status(201).json(newCounselor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};a

module.exports = { getAllCounselors, getCounselorById, createCounselor };