// frontend/src/pages/Register.js
import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-12">
        <h2 className="text-center text-3xl font-bold mb-6">Register Yourself</h2>
        <Form />
      </div>
    </div>
  );
};

export default Register;
 
