const express = require('express');
const router = express.Router();
const {
  getPrayers,
  addPrayer,
} = require('../controllers/prayerIntentionsController');

router.route('/').get(getPrayers).post(addPrayer);

module.exports = router;
