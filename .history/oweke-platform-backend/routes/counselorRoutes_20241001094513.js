const express = require('express');
const { getAllCounselors, getCounselorById, createCounselor } = require('../controllers/counselorController');
const router = express.Router();

router.get('/', getAllCounselors);
router.get('/:id', getCounselorById);
router.post('/', createCounselor);

module.exports = router;