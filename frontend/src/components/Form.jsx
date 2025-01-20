// frontend/src/components/Form.js
import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Form = () => {
  const initialState = {
    name: '',
    age: '',
    gender: '',
    dob: '',
    email: '',
    phone: ''
  };
  
  const [formData, setFormData] = useState(initialState);
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/submit', formData);
      setShowCard(true);
      setFormData(initialState); // Reset form fields after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
        </div>

        <motion.button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          whileHover={{ scale: 1.05 }}
        >
          Submit
        </motion.button>
      </motion.form>

      {showCard && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Thank You for Contacting Us!</h2>
            <p>Please visit our office within the next 3-4 days for further processing.</p>
            <p className="mt-4">Office Address: [Your Office Address Here]</p>
            <button
              className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              onClick={() => setShowCard(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Form;
