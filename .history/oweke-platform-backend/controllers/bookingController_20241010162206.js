const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');

exports.bookEvent = async (req, res) => {
  const { eventId, userName, userEmail } = req.body;

  try {
    const newBooking = new Booking({ eventId, userName, userEmail });
    await newBooking.save();

    // Send confirmation email
    sendConfirmationEmail(userEmail, eventId);

    res.status(201).json({ message: 'Booking successful!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to send confirmation email
const sendConfirmationEmail = (toEmail, eventId) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: 'Confirmation de réservation',
    text: `Merci pour votre réservation pour l'événement ${eventId}. Rejoignez le lien vidéo ici: https://zoom.us/j/1234567890`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};