const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/payment', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'INR',
      payment_method: req.body.paymentMethodId,
      confirmation_method: 'manual',
      confirm: true,
    });

    res.status(200).json({
      success: true,
      paymentIntent: paymentIntent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
