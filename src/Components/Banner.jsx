import React from 'react';

const Banner = ({title}) => {
    return (
        <div className='my-banner'>
            <h2 className='text-center text-3xl font-semibold'>{title}</h2>
        </div>
    );
};

export default Banner;