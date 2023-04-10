import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Chart from './Chart';


const Statistics = () => {
    const data = useLoaderData()
    console.log(data.marks);
    return (
        <>
            <Banner title="Statistics"></Banner>
            
            <div className="my-container my-8">
                <Chart data={data}></Chart>
            </div>
        </>
    );
};

export default Statistics;