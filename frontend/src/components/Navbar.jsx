// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-xl font-bold">Marriage Bureau</Link>
      <Link to="/register" className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-100">Register Yourself</Link>
    </nav>
  );
};

export default Navbar;
