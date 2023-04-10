import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import SingleAppliedJob from './SinlgeAppliedJob';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData()
    return (
        <>
            <Banner title='Applied Jobs'></Banner>
            <div className='my-container my-12'>
                {
                    appliedJobs.map(job => (
                        <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
                    ))
                }
            </div>
        </>
    );
};

export default AppliedJobs;