import React from 'react';
import aboutImg1 from '../../assets/images/about_us/person.jpg'
import aboutImg2 from '../../assets/images/about_us/parts.jpg'

const AboutSection = () => {
    return (
        <div className='flex  w-100 m-16 '>
            <div className='relative flex-1 rounded-lg'>
                <img className=' rounded-lg h-100' src={aboutImg1} alt="" />
                <img className='w-80 border-8 border-white absolute -bottom-8 -right-8' src={aboutImg2} alt="" />
           </div>
           <div className='px-16 flex-1 text-start'>
                <p className='text-orange-600 font-bold'>About Us</p>
                <p className='text-3xl font-bold'>We are qualified & of experience in this field</p>
                <p className='mt-6 opacity-75'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='mt-6 opacity-75'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn bg-orange-600 border-none mt-6'>Get More Info <i className='fa-solid fa-arrow-right text-white ml-2'></i></button>
           </div>
        </div>
    );
};

export default AboutSection;