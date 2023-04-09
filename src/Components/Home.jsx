import React from 'react';
import bannerParson from '../assets/banner-person.png'

const Home = () => {
    return (
        <header className='my-container flex flex-col-reverse md:flex-row justify-between items-center gap-4 px-4 lg:px-0'>
            <div className='w-full md:w-2/4 lg:w-1/3'>
                <h2 className='text-[#1A1919] text-5xl font-bold leading-tight'>One Step Closer To Your <span className='text-indigo-500'>Dream Job</span></h2>
                <p className='my-4 text-[#757575] text-lg font-medium'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='primary-btn'>Get Started</button>
            </div>
            <div className='w-full md:w-2/4 lg:w-2/4'>
                <img src={bannerParson} alt="Banner Person" className='w-fit'/>
            </div>
        </header>
    );
};

export default Home;