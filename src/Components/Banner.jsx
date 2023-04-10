import React from 'react';

const Banner = ({title}) => {
    return (
        <div className='bg-[#f1eeff] p-8'>
            <h2 className='text-center text-3xl font-semibold'>{title}</h2>
        </div>
    );
};

export default Banner;