import React from 'react';
import BlogPage from '../components/BlogPage';

const Blogs = () => {
  return (
    <div className='px-4 py-32 mx-auto pt-16 max-w-screen overflow-hidden'>
      <div className='text-center text-white'>
        <h1 className='text-5xl font-bold py-2'>Blog Page</h1>
        <p className='text-lg opacity-70 py-1'>Explore insightful articles and stories.</p> {/* Optional description */}
      </div>

      {/* All blogs container */}
      <div className='max-w-7xl mx-auto overflow-hidden'>
        <BlogPage />
      </div>
    </div>
  );
}

export default Blogs;
