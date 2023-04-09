import React, { useEffect, useState } from 'react';
import bannerParson from '../assets/banner-person.png'
import SingleCard from './SingleCard';
import { useLoaderData } from 'react-router-dom';
import SingleJobCard from './SingleJobCard';

const Home = () => {
    const loaderData = useLoaderData();
    const [cards, setCards] = useState([]);
    const [jobs, setJobs] = useState(loaderData.slice(0, 4))
    useEffect(() => {
        fetch('catagory.json')
            .then(res => res.json())
            .then(cards => setCards(cards));
    }, [])

    return (
        <>
            <header className='my-container flex flex-col-reverse md:flex-row justify-between items-center gap-4 px-4 lg:px-0'>
                <div className='w-full md:w-2/4 lg:w-1/3'>
                    <h2 className='text-[#1A1919] text-5xl font-bold leading-tight'>One Step Closer To Your <span className='text-indigo-500'>Dream Job</span></h2>
                    <p className='my-4 text-[#757575] text-lg font-medium'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='primary-btn'>Get Started</button>
                </div>
                <div className='w-full md:w-2/4 lg:w-2/4'>
                    <img src={bannerParson} alt="Banner Person" className='w-fit' />
                </div>
            </header>
            <main>
                <section className='my-container mt-12'>
                    <h2 className='section-title'>Job Category List</h2>
                    <p className="sub-title">Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8'>
                        {
                            cards.map(card => (
                                <SingleCard
                                    key={card.id}
                                    card={card}
                                >
                                </SingleCard>
                            )
                            )
                        }
                    </div>
                </section>
                <section className='my-container mt-12'>
                    <h2 className="section-title">Featured Jobs</h2>
                    <p className="sub-title">Explore thousands of job opportunities with all the information you need. Its your future</p>
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
                </section>
            </main>
        </>

    );
};

export default Home;