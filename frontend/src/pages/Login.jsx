// frontend/src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSendOtp = async () => {
    try {
      await axios.post('http://localhost:5000/api/send-otp', { email });
      setIsOtpSent(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOtp = async () => {
    // Verify OTP logic (not shown here for brevity)
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <motion.div
        className="container mx-auto py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
            {!isOtpSent ? (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                <motion.button
                  onClick={handleSendOtp}
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Send OTP
                </motion.button>
              </div>
            ) : (
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP:</label>
                <input type="text" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                <motion.button
                  onClick={handleVerifyOtp}
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Verify OTP
                </motion.button>
              </div>
            )}
          </div>
        ) : (
          <p className="text-center text-xl text-green-500">You are logged in!</p>
        )}
      </motion.div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
