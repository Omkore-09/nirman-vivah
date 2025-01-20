// frontend/src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection';
import JoinUsSection from '../components/JoinUsSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <InfoSection />
      <JoinUsSection />
    </div>
  );
};

export default Home;
