import React from 'react';
import bannerImg from '../../assets/images/banner/1.jpg'

const Hero = () => {
    return (
        <div className='mx-16 my-6  rounded-md'>
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${bannerImg})`, borderRadius:"10px" }}>
                <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                <div className="hero-content text-start text-neutral-content d-flex flex-start">
                    <div className="max-w-md text-start">
                        <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        
                            <button className="btn border-none bg-orange-600 ">Discover More</button>
                            <button className="btn btn-outline ml-4 text-white">Latest Projects</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;