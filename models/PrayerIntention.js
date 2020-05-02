const mongoose = require('mongoose');

const PrayerIntentionSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  prayerIntention: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('PrayerIntention', PrayerIntentionSchema);
