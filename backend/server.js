import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { Client } from 'whatsapp-web.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const basicDetailsSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    dob: Date,
    email: String,
    phone: String
});

const BasicDetails = mongoose.model('BasicDetails', basicDetailsSchema);

app.post('/api/submit', async (req, res) => {
    const { name, age, gender, dob, email, phone } = req.body;

    const newDetails = new BasicDetails({ name, age, gender, dob, email, phone });
    await newDetails.save();

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Marriage Bureau Submission Confirmation',
        text: 'Thank you for submitting your details. Please visit our office within 2-3 days for further processing. Office Address: [Your Office Address Here]'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

    const whatsappClient = new Client();
    whatsappClient.initialize();

    whatsappClient.on('qr', qr => {
        console.log('QR RECEIVED', qr);
    });

    whatsappClient.on('ready', () => {
        console.log('WhatsApp Client is ready');
        whatsappClient.sendMessage(phone, 'Thank you for submitting your details. Please visit our office within 2-3 days for further processing. Office Address: [Your Office Address Here]');
    });

    whatsappClient.on('auth_failure', () => {
        console.error('AUTHENTICATION FAILURE');
    });

    res.send('Submission successful!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 
