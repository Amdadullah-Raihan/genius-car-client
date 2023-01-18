import React from 'react';
import AboutSection from './AboutSection';
import Hero from './Hero';
import ServicesSection from './ServicesSection';

const Home = () => {
    return (
        <div className='py-10'>
            <Hero></Hero>
            <AboutSection></AboutSection>
            <ServicesSection></ServicesSection>
        </div>
    );
};

export default Home;