import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleAppliedJob = ({ job }) => {
    const { id, logo, title, company, jobType, location, jobTime, salary } = job
    return (
        <div className='rounded-lg border-[#E8E8E8] py-4 px-8 gap-4 shadow-lg md:flex items-center my-8 md:w-3/4 mx-auto border-2'>
            <div className='md:w-1/6'>
                <img src={logo} alt="Company Logo" className='object-contain h-auto' />
            </div>
            <div className='md:w-1/2 my-5'>
                <h3 className="card-title">{title}</h3>
                <p className="card-sub-title">{company}</p>
                <div>
                    <button className="card-btn">{jobType}</button>
                    <button className="card-btn">{jobTime}</button>
                </div>

                <p className='text-[#757575] font-semibold text-xl my-4 flex items-center gap-1'>
                    <MapPinIcon className='w-5 h-5'></MapPinIcon>
                    {location}
                </p>
                <p className='text-[#757575] font-semibold text-xl my-4 flex items-center gap-1'>
                    <CurrencyDollarIcon className='w-5 h-5'></CurrencyDollarIcon>
                    Salary: {salary}
                </p>

            </div>
            <div className='ml-auto'>
                <Link to={`/job/${id}`}><button className='primary-btn'>View Details</button></Link>
            </div>

        </div>
    );
};

export default SingleAppliedJob;