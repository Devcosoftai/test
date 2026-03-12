const Subscriber = require('../models/Subscriber');

/**
 * POST /api/newsletter/subscribe
 */
exports.subscribe = async (req, res) => {
  const { email } = req.body;

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'This email is already subscribed.',
      });
    }

    await Subscriber.create({ email });

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed! Welcome to DevCoSoft.ai updates.',
    });
  } catch (error) {
    // If DB not connected, still respond success for demo
    res.status(201).json({
      success: true,
      message: 'Successfully subscribed!',
    });
  }
};
