import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="pt-20 min-h-screen" style={{ backgroundColor: '#f5f5f0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience premium grooming services in a relaxed, professional environment
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="max-w-5xl w-full">
            <img
              src="/Haircuts & Styling Haircut - £17 Scissor Cut - £18 Skin Fade - £22 Zero Skin Fade - £22 Taper Fade - £22 One Grade All Over - £12 Shaving Services Hot Towel Shave - £13 Wet Head Shave - £13 Clippe (1).png"
              alt="H&R Barbers Services Menu"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/appointments"
            className="inline-block bg-black text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;