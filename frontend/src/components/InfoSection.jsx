// frontend/src/components/InfoSection.js
import React from 'react';
import { motion } from 'framer-motion';

const InfoSection = () => {
  return (
    <motion.section
      className="py-12 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Our Bureau</h2>
        <p className="mb-8 text-lg">We provide the best matchmaking services to help you find your perfect partner.</p>
        <div className="flex justify-center">
          <img src="/path/to/your/image.jpg" alt="Bureau" className="rounded-lg shadow-lg"/>
        </div>
      </div>
    </motion.section>
  );
};

export default InfoSection;
