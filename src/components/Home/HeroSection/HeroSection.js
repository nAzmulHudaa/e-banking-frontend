import React from 'react';
import './HeroSection.css';
import heroImg from '../../../images/Layer_1.png';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-text'>
        <h4>
          A universe of opportunities <br /> <span>Open to you.</span>
        </h4>
        <p>
          Welcome to the world of E-banking, where endless opportunities await. Whether you're looking to grow your business or manage your personal finances, we're here to make your life easier. With our cutting-edge technology and expert guidance, you'll have everything you need to succeed.
        </p>
        <button className='gradient-button'>
          <Link to='/register'>Register Now</Link>
        </button>
      </div>
      <div className='hero-image'>
        <img src={heroImg} alt='Hero Image' />
      </div>
    </div>

  );
};

export default HeroSection;
