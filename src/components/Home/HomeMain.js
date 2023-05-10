import React from 'react';
import Navbar from './Navbar/Navbar.js';
import HeroSection from './HeroSection/HeroSection.js';
import Clients from './Clients/Clients.js';
import FAQ from './FAQ/FAQ.js';
import Features from './Features/Features.js';
import Work from './Work/Work.js';
import Workflow from './Workflow/Workflow.js';
import Testimonial from './Testimonial/Testimonial.js';
import Footer from './Footer/Footer.js';

const HomeMain = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <Clients/>
            <Features/>
            <Workflow/>
            <Work/>
            <FAQ/>
            <Testimonial/>
            <Footer/>
        </div>
    );
};

export default HomeMain;