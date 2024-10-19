// backend/routes/payment.js
const express = require('express');
const router = express.Router();
const paypalClient = require('../config/paypal');
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

// Create PayPal order
router.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  let request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: amount,
        },
      },
    ],
  });

  try {
    const order = await paypalClient.execute(request);
    res.json({ id: order.result.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Capture PayPal order
router.post('/capture-order', async (req, res) => {
  const { orderID } = req.body;

  let request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderID);

  try {
    const capture = await paypalClient.execute(request);
    res.json({ status: capture.result.status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;