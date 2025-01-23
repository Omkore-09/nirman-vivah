import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import backgroundImage from '../assets/images/home.jpg';

const AboutUs = () => {
  return (
    <motion.section
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 p-6 text-center text-ivory max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">Welcome to Nirman Vivah</h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the most trusted matchmaking services, helping you find your ideal partner
          with care, privacy, and excellence.
        </p>

        {/* Additional content for mobile */}
        <ul className="text-base md:text-lg mb-6">
          <li className="mb-2">
            <span className="font-bold text-gold-500">✔ Verified Profiles:</span> Only genuine and verified members.
          </li>
          <li className="mb-2">
            <span className="font-bold text-gold-500">✔ Personalized Matching:</span> AI-powered recommendations.
          </li>
          <li className="mb-2">
            <span className="font-bold text-gold-500">✔ Expert Support:</span> Dedicated relationship managers to guide you.
          </li>
        </ul>

        <Link
          to="/register"
          className="bg-gold-500 text-maroon-600 font-bold py-2 px-6 rounded-lg hover:bg-gold-400 transition shadow-md"
        >
          Register Yourself
        </Link>
      </div>
    </motion.section>
  );
};

export default AboutUs;
