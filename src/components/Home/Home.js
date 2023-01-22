import React from 'react';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Hero from './Hero';
import ServicesSection from './ServicesSection';

const Home = () => {
    return (
        <div className='py-10'>
            <Hero></Hero>
            <AboutSection/>
            <ServicesSection/>
            <ContactSection/>
        </div>
    );
};

export default Home;