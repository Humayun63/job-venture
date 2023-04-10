import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from './SingleBlog';
import Banner from './Banner';

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <>
            <Banner title="Blog"></Banner>
            <div className='my-container my-12'>
                {
                    blogs.map(blog => (
                        <SingleBlog
                            key={blog.id}
                            blog={blog}
                        ></SingleBlog>
                    ))
                }
            </div>
        </>
    );
};

export default Blog;