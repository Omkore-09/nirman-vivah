// frontend/src/components/JoinUsSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JoinUsSection = () => {
  return (
    <motion.section
      className="py-12 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join With Us</h2>
        <p className="mb-8 text-lg">Become a part of our community and start your journey today.</p>
        <Link to="/register">
          <motion.button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
          >
            Register Yourself
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default JoinUsSection;
