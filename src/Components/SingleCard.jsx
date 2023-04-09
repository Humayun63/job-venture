import React from 'react';

const SingleCard = ({card}) => {
    const {title, subtitle, logo} = card;
    return (
        <div className='rounded-lg bg-[#ebebf5] p-10'>
            <img src={logo} alt="Card Logo" className='w-10 h-10 mb-4'/>
            <h3 className="card-title">{title}</h3>
            <p className="card-sub-title">{subtitle}</p>
        </div>
    );
};

export default SingleCard;