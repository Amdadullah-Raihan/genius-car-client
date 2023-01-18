import React from 'react';

const ServicesSection = () => {
    return (
        <div className='m-16'>
            <div className="mx-40 mt-40">
                <p className='text-orange-600 font-bold my-4'>Services</p>
                <p className='text-3xl font-bold my-4'>Our Service Area</p>
                <p className=' opacity-70 my-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            {/* grid starts  */}

            <div className='grid grid-cols-3 gap-4 mt-20'>
                <div className="card card-compact rounded-lg border">
                    <figure className='m-3 rounded-lg'><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body text-start">
                        <h2 className="card-title">Shoes!</h2>
                       
                        <div className="card-actions justify-between text-orange-600 font-bold">
                            <p>Price: $200</p>
                            <i className='fa-solid fa-arrow-right'></i>
                        </div>
                    </div>
                </div>
                <div className="card card-compact rounded-lg border">
                    <figure className='m-3 rounded-lg'><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body text-start">
                        <h2 className="card-title">Shoes!</h2>
                       
                        <div className="card-actions justify-between text-orange-600 font-bold">
                            <p>Price: $200</p>
                            <i className='fa-solid fa-arrow-right'></i>
                        </div>
                    </div>
                </div>
                <div className="card card-compact rounded-lg border">
                    <figure className='m-3 rounded-lg'><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body text-start">
                        <h2 className="card-title">Shoes!</h2>
                       
                        <div className="card-actions justify-between text-orange-600 font-bold">
                            <p>Price: $200</p>
                            <i className='fa-solid fa-arrow-right'></i>
                        </div>
                    </div>
                </div>
               
            </div>

            {/* grid starts  */}

            <button className='mt-8 btn btn-outline text-orange-600'>More Services <i className='fa-solid fa-arrow-right ml-2'></i></button>
        </div>
    );
};

export default ServicesSection;