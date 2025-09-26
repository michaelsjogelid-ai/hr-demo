import React from 'react';

const ScrollingBanner = () => {
  return (
    <div className="bg-black text-white py-3 overflow-hidden mt-16">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium tracking-wider">
          PRECISION GROOMING • ELEVATE YOUR LOOK TODAY • PREMIUM BARBERSHOP EXPERIENCE • 
          PRECISION GROOMING • ELEVATE YOUR LOOK TODAY • PREMIUM BARBERSHOP EXPERIENCE • 
          PRECISION GROOMING • ELEVATE YOUR LOOK TODAY • PREMIUM BARBERSHOP EXPERIENCE • 
        </span>
      </div>
    </div>
  );
};

export default ScrollingBanner;