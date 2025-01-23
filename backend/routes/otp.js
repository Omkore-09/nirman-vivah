const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);

  // Store OTP and timestamp in the database (not shown here for brevity)

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending OTP' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ success: 'OTP sent successfully' });
    }
  });
});

module.exports = router;
