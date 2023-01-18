import React from 'react';
import AboutSection from './AboutSection';
import Hero from './Hero';

const Home = () => {
    return (
        <div className='py-10'>
            <Hero></Hero>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;