const Contact = require('../models/Contact');

/**
 * GET /api/stats
 * Returns company stats (hardcoded + live DB counts)
 */
exports.getStats = async (req, res) => {
  try {
    let contactCount = 0;
    try {
      contactCount = await Contact.countDocuments();
    } catch (_) { /* DB might not be connected */ }

    res.json({
      success: true,
      data: {
        projectsDelivered: 150,
        happyClients: 50,
        countriesServed: 8,
        clientSatisfaction: 99,
        inquiriesReceived: contactCount,
        yearsExperience: 5,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};
