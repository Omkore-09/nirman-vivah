import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import AboutUs from '../components/AboutUs';
import StepsRequired from '../components/StepsRequired';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container">
        <AboutUs />
        <StepsRequired />
        
        {/* New Section: Your Story */}
        <div className="flex flex-col items-center bg-maroon-600 text-ivory py-12 px-4 mt-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Your Story is Waiting to Happen!</h2>
          <p className="text-lg mb-6">
            Take the first step to find your perfect match and let us help you create your own story.
          </p>
          <Link
            to="/register"
            className="bg-gold-500 text-maroon-600 font-bold py-2 px-6 rounded-lg hover:bg-gold-400 transition shadow-md"
          >
            Get Started
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
