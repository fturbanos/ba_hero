import React from 'react';
import '../App.css';
import { Button } from './Button';
import "../styles/css/HeroSection.css";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/ba-east.mp4' autoPlay loop muted />
      <h1>Binary Anvil East is an award winning e-commerce agency based in Bacolod City, Philippines. </h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path="/about-us"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;