import React from 'react';

const ContactSection = () => {
    return (
        <div className='m-16 bg-black py-16 rounded-lg px-14 flex justify-between'>
            <div className='flex'>
                <div className=''>
                    <i class="fa-regular fa-calendar-days text-white text-4xl"></i>
                </div>
                <div className='text-start ml-4'>
                    <small className='text-white'>We are open monday-friday</small>
                    <p className='text-white   font-bold'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div>
                <div className='flex'>
                    <div className=''>
                        <i class="fa-regular fa-calendar-days text-white text-4xl"></i>
                    </div>
                    <div className='text-start ml-4'>
                        <small className='text-white'>We are open monday-friday</small>
                        <p className='text-white   font-bold'>7:00 am - 9:00 pm</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex'>
                    <div className=''>
                        <i class="fa-regular fa-calendar-days text-white text-4xl"></i>
                    </div>
                    <div className='text-start ml-4'>
                        <small className='text-white'>We are open monday-friday</small>
                        <p className='text-white   font-bold'>7:00 am - 9:00 pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;