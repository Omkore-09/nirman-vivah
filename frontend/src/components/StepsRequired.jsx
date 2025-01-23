import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaClipboardList, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    icon: <FaUser className="text-3xl text-blue-500" />,
    text: 'Register yourself with basic details.',
  },
  {
    id: 2,
    icon: <FaClipboardList className="text-3xl text-green-500" />,
    text: 'Complete your profile with additional information.',
  },
  {
    id: 3,
    icon: <FaCheckCircle className="text-3xl text-yellow-500" />,
    text: 'Review and verify your details.',
  },
  {
    id: 4,
    icon: <FaPhoneAlt className="text-3xl text-red-500" />,
    text: 'Contact our office for further assistance.',
  },
];

const StepsRequired = () => {
  return (
    <motion.section
      className="py-12 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Steps Required</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center space-y-4 w-64"
            >
              {/* Circle with Icon */}
              <div className="w-20 h-20 flex items-center justify-center bg-white shadow-lg rounded-full">
                {step.icon}
              </div>
              {/* Step Text */}
              <p className="text-lg font-medium">{step.text}</p>
              {/* Step Number */}
              <span className="text-sm font-bold text-gray-500">Step {step.id}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StepsRequired;
