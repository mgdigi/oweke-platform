// backend/routes/counselor.js
const express = require('express');
const router = express.Router();
const counselorController = require('../controllers/counselorController');

// Get all counselors
router.get('/', counselorController.getAllCounselors);

// Search by specialty
router.get('/search', counselorController.searchBySpecialty);

// Get counselor by ID
router.get('/:id', counselorController.getCounselorById);

module.exports = router;