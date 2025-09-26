import React from 'react';
import Hero from '../components/Hero';
import Values from '../components/Values';
import About from '../components/About';
import StudentDiscounts from '../components/StudentDiscounts';

const Home = () => {
  return (
    <div>
      <Hero />
      <Values />
      <About />
      <StudentDiscounts />
    </div>
  );
};

export default Home;