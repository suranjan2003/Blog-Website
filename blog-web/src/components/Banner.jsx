import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='px-4 py-32 text-white mx-auto pt-16'>
        <div className='text-center'>
            <h1 className='text-5xl font-bold py-2'>Welcome to the Blog</h1>
            <p className='opacity-70 py-2 mx-auto'>Welcome to our blog, a space where we explore insightful ideas, innovative trends, and practical tips across a wide range of topics.
                Whether you're a tech enthusiast looking to stay ahead of the latest industry advancements, a creative professional seeking inspiration, or someone eager to enhance their lifestyle, our blog has something for you. 
                We are passionate about delivering valuable content that educates, inspires, and empowers our readers. Join us on this journey as we dive into thought-provoking articles, expert advice, and engaging discussions designed to enrich your knowledge and spark curiosity.
            </p>
            <div>
                <Link 
                to="/about" className='text-yellow-400 hover:underline inline-flex items-center'
                >
                    Learn more
                    <FaArrowRight className='mt-1 ml-2 text-base opacity-70' />
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Banner