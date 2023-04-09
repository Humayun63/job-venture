import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const SingleJobCard = ({ job }) => {
    const { id, logo, title, company, jobType, location, jobTime, salary } = job
    return (
        <div className='rounded-lg border-[#E8E8E8] p-10 shadow-lg border-2 flex flex-col '>
            <div>
                <img src={logo} alt="Company Logo" className='object-contain h-auto' />
            </div>
            <div className='mt-auto'>
                <h3 className="card-title">{title}</h3>
                <p className="card-sub-title">{company}</p>
                <div>
                    <button className="card-btn">{jobType}</button>
                    <button className="card-btn">{jobTime}</button>
                </div>
                <p className='md:inline-flex  items-center gap-6 text-[#757575] font-semibold text-xl my-4'>
                    <span className='inline-flex items-center gap-1'>
                        <MapPinIcon className='w-5 h-5 text-[#757575]'></MapPinIcon>
                        {location}
                    </span>
                    <span className='inline-flex items-center gap-1'>
                        <CurrencyDollarIcon className='w-5 h-5 text-[#757575]'></CurrencyDollarIcon>
                        Salary: {salary}
                    </span>
                </p>
                <div>
                    <button className='primary-btn'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleJobCard;