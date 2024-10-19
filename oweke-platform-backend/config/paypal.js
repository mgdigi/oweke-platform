// backend/config/paypal.js
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

let environment = new checkoutNodeJssdk.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,  // Add your client ID
  process.env.PAYPAL_CLIENT_SECRET  // Add your client secret
);
let client = new checkoutNodeJssdk.core.PayPalHttpClient(environment);

module.exports = client;