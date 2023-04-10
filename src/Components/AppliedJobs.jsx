import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import SingleAppliedJob from './SinlgeAppliedJob';


const AppliedJobs = () => {
    const appliedJobs = useLoaderData() ? useLoaderData() : [];
    const [jobs, setJobs] = useState(appliedJobs)

    const handleFilterBy = (event) => {
        if (event.target.value === 'onsite') {
            const filteredJobs = appliedJobs.filter(job => job.jobType === 'Onsite')
            setJobs(filteredJobs)
        } else {
            const filteredJobs = appliedJobs.filter(job => job.jobType === 'Remote')
            setJobs(filteredJobs)
        }
    }

    return (
        <>
            <Banner title='Applied Jobs'></Banner>
            <div className='my-container my-12'>
                <div>
                    <select defaultValue="filterBy" className="select ml-auto border border-indigo-200 md:block outline-none" onChange={handleFilterBy}>
                        <option value="filterBy" disabled >Filter By</option>
                        <option value="onsite">Onsite</option>
                        <option value="remote">Remote</option>
                    </select>
                </div>
                {jobs.length === 0 && <h2 className='text-5xl text-center font-bold my-20'>Nothing Found!</h2>}
                {
                    jobs.map(job => (
                        <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
                    ))
                }
            </div>
        </>
    );
};

export default AppliedJobs;