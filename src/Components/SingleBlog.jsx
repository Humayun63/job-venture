import React from 'react';

const SingleBlog = ({blog}) => {
    const {question, answer} = blog;
    return (
        <>
            <article className='shadow-lg my-12 px-4 py-6 rounded-md border-indigo-100 border '>
                <h2 className='text-2xl my-4 font-semibold text-[#1A1919]'>{question}</h2>
                <p className='text-base text-[#757575]'>{answer}</p>
            </article>
        </>
    );
};

export default SingleBlog;