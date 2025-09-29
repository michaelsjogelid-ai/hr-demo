import React from 'react';
import Hero from '../components/Hero';
import Values from '../components/Values';
import About from '../components/About';
import GoogleReviews from '../components/GoogleReviews';
import StudentDiscounts from '../components/StudentDiscounts';

const Home = () => {
  return (
    <div>
      <Hero />
      <Values />
      <About />
      <GoogleReviews />
      <StudentDiscounts />
    </div>
  );
};

export default Home;