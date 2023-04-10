import React, { useEffect } from 'react';
import { useLoaderData, useLocation} from 'react-router-dom';
import Banner from './Banner';
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-hot-toast';
import { saveToDB } from '../utilities/fakeDB';
import ErrorPage from './ErrorPage';

const JobDetails = () => {
    const {pathname} = useLocation();
    const data = useLoaderData();
    const {id,  title,  location, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, phoneNumber, emailAddress} = data;

    const handleApplyBtn = id =>{
        const isExist = localStorage.getItem('applied-jobs') ? JSON.parse(localStorage.getItem('applied-jobs')).includes(id) : '';
        if(isExist){
            toast.error('Already Applied 🔥')
        }else{
            saveToDB(id)
            toast.success('Successfully Applied ❤️')
        }
    }

    if(pathname.split('/job/')[1] !== id){
        console.clear()
        return <ErrorPage></ErrorPage>
    }
    return (
        <>
          <Banner title='Job Details'></Banner>  
          <article className='my-container lg:flex gap-8 my-12'>
            <div className='lg:w-2/3'>
                <p className='text-[#757575] text-base my-4 font-semibold     '>
                    <span className='text-[#1A1919] font-bold'>Job Description:</span> {jobDescription}
                </p>
                <p className='text-[#757575] text-base font-semibold     '>
                    <span className='text-[#1A1919] font-bold'>Job Responsibility:</span> {jobResponsibility}
                </p>
                <p className='text-[#757575] text-base my-4 font-semibold     '>
                    <span className='text-[#1A1919] font-bold'>Educational Requirements:</span> <br />
                    {educationalRequirements}
                </p>
                <p className='text-[#757575] text-base my-4 font-semibold     '>
                    <span className='text-[#1A1919] font-bold'>Experiences:</span> <br />
                    {experiences}
                </p>
            </div>
            <div className='lg:w-1/3 p-4 bg-indigo-300 rounded-md md:px-8'>
                <h3 className='text-xl font-bold text-[#1A1919] my-4 px-2'>Job Details</h3>
                <hr />
                <p className='flex gap-2 items-center my-4'>
                    <span> <CurrencyDollarIcon className='w-5 h-5 text-indigo-500'></CurrencyDollarIcon></span>
                    <span className='text-[#474747] font-bold text-base'>Salary:</span> 
                    <span className="text-[#757575] text-base font-medium">{salary} (Per Month)</span>
                </p>
                <p className='flex gap-2 items-center my-4'>
                    <span> <CalendarDaysIcon className='w-5 h-5 text-indigo-500'></CalendarDaysIcon></span>
                    <span className='text-[#474747] font-bold text-base'>Job Title:</span> 
                    <span className="text-[#757575] text-base font-medium">{title}</span>
                </p>
                <h3 className='text-xl font-bold text-[#1A1919] my-4 px-2'>Contact Information</h3>
                <hr />
                <p className='flex gap-2 items-center my-4'>
                    <span> <PhoneIcon className='w-5 h-5 text-indigo-500'></PhoneIcon></span>
                    <span className='text-[#474747] font-bold text-base'>Phone:</span> 
                    <span className="text-[#757575] text-base font-medium">{phoneNumber}</span>
                </p>
                <p className='flex gap-2 items-center my-4'>
                    <span> <EnvelopeIcon className='w-5 h-5 text-indigo-500'></EnvelopeIcon></span>
                    <span className='text-[#474747] font-bold text-base'>Email:</span> 
                    <span className="text-[#757575] text-base font-medium">{emailAddress}</span>
                </p>
                <p className='flex gap-2 items-center my-4'>
                    <span> <MapPinIcon className='w-5 h-5 text-indigo-500'></MapPinIcon></span>
                    <span className='text-[#474747] font-bold text-base'>Address:</span> 
                    <span className="text-[#757575] text-base font-medium">{location}</span>
                </p>
                <div>
                    <button className="primary-btn" onClick={()=> handleApplyBtn(id)}>Apply Now</button>
                </div>
            </div>
          </article>
        </>
    );
};

export default JobDetails;