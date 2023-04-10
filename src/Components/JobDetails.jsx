import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job.id);
    return (
        <div>
            {typeof job}
        </div>
    );
};

export default JobDetails;