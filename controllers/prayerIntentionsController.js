const PrayerIntention = require('../models/PrayerIntention');

// Get all prayers
exports.getPrayers = async (req, res, next) => {
  try {
    const prayers = await PrayerIntention.find();

    return res.status(200).json({
      success: true,
      count: prayers.length,
      data: prayers,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Add a new prayer
exports.addPrayer = async (req, res, next) => {
  try {
    const { name, prayerIntention } = req.body;

    const prayer = await PrayerIntention.create(req.body);

    return res.status(201).json({
      success: true,
      data: prayer,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
