import React from 'react';
import "../../App.css";
import HeroSection from "../HeroSection";
import Careers from './Careers';
import Cards from '../Cards';

function Home() {
  return (
    <>
      <HeroSection />
      <Careers />
      <Cards />
    </>
  );
}

export default Home;
