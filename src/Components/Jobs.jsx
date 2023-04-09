import React from 'react';
import SingleJobCard from './SingleJobCard';

const Jobs = ({jobs, setJobs, loaderData}) => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    jobs.map(job => (
                        <SingleJobCard
                            key={job.id}
                            job={job}
                        >
                        </SingleJobCard>
                    ))
                }
            </div>
            {
                jobs.length === 4 &&
                <div className='text-center my-8'>
                    <button className="primary-btn" onClick={() => setJobs(loaderData)}>See All Jobs</button>
                </div>
            }
        </div>
    );
};

export default Jobs;