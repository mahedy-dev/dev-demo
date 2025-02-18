// routes/lendingRoutes.js
const express = require('express');
const router = express.Router();
const lendingController = require('../controllers/lendingController');

router.get('/', lendingController.getAllLendingOptions);
router.post('/', lendingController.applyForLending);

module.exports = router;
