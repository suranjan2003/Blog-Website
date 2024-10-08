import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        {/* Footer Top Section */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Column 1: About */}
          <div>
            <h2 className='font-bold text-xl mb-4'>About Us</h2>
            <p className='text-gray-400 text-sm'>
              We are a tech company focused on building impactful solutions that help businesses
              grow and thrive.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className='font-bold text-xl mb-4'>Quick Links</h2>
            <ul className='space-y-2'>
              <li>
                <a href='/home' className='text-gray-400 hover:text-yellow-500'>
                  Home
                </a>
              </li>
              <li>
                <a href='/services' className='text-gray-400 hover:text-yellow-500'>
                  Services
                </a>
              </li>
              <li>
                <a href='/contact' className='text-gray-400 hover:text-yellow-500'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='/blog' className='text-gray-400 hover:text-yellow-500'>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h2 className='font-bold text-xl mb-4'>Contact Us</h2>
            <ul className='space-y-2'>
              <li className='text-gray-400'>Email: info@company.com</li>
              <li className='text-gray-400'>Phone: +123 456 7890</li>
              <li className='text-gray-400'>Address: 123 Main St, City, Country</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h2 className='font-bold text-xl mb-4'>Follow Us</h2>
            <div className='flex space-x-4'>
              <a href='https://facebook.com' className='text-gray-400 hover:text-blue-600' target="_blank" rel="noopener noreferrer">
                <FaFacebook className="inline-block" />
              </a>
              <a href='https://twitter.com' className='text-gray-400 hover:text-blue-400' target="_blank" rel="noopener noreferrer">
                <FaTwitter className="inline-block" />
              </a>
              <a href='https://linkedin.com' className='text-gray-400 hover:text-blue-500' target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="inline-block" />
              </a>
              <a href='https://instagram.com' className='text-gray-400 hover:text-pink-500' target="_blank" rel="noopener noreferrer">
                <FaInstagram className="inline-block" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className='mt-12 text-center'>
          <p className='text-gray-500'>
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
