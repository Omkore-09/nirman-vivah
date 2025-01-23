import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-maroon-600 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <Link to="/" className="text-ivory text-xl font-bold">
        Marriage Bureau
      </Link>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-ivory text-2xl focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 right-4 bg-maroon-700 w-48 rounded-lg shadow-lg md:flex md:items-center md:static md:w-auto md:bg-transparent`}
      >
        <Link
          to="/login"
          className="block text-maroon-600 bg-ivory py-2 px-4 rounded hover:bg-gold-500 hover:text-ivory md:inline md:mr-2"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="block text-maroon-600 bg-ivory py-2 px-4 rounded hover:bg-gold-500 hover:text-ivory md:inline"
        >
          Register Yourself
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
