import React from 'react';
import './HeroSection.css';
import heroImg from '../../../images/Layer_1.png';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-text'>
        <h4>
          A universe of opportunities <br /> <span>Open to you.</span>
        </h4>
        <p>
          Your Payoneer account is your key to unlock a universe of
          opportunities. Whether making international payments, receiving funds,
          managing your digital business, or accessing capital, Payoneer opens
          your business up to the world.
        </p>
        <button className='gradient-button'>
          Register Now
        </button>
      </div>
      <div className='hero-image'>
        <img src={heroImg} alt='Hero Image' />
      </div>
    </div>
    
  );
};

export default HeroSection;
