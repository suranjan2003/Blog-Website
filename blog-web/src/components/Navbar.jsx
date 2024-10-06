import React, { useState } from 'react'; // Import useState for mobile menu state management
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaGlobe, FaSquareGithub, FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const navItems = [
        { path: '/', Link: 'Home' },
        { path: '/blogs', Link: 'Blogs' },
        { path: '/about', Link: 'About' },
        { path: '/contact', Link: 'Contact' }
    ];

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for managing mobile menu visibility
    const location = useLocation();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
    };

    return (
        <header className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-700 fixed right-0 left-0 top-0'>
            <nav className="px-4 py-2 max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="classname-logo text-2xl font-bold text-white">
                    Design<span className='text-yellow-400'>SK</span>
                </a>

                {/* Mobile menu button */}
                <div className="md:hidden text-white">
                    <button 
                        onClick={toggleMobileMenu} // Add onClick to toggle the mobile menu
                        className='cursor-pointer hover:text-yellow-300'
                    >
                        {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
                    </button>
                </div>

                {/* Navigation items and icons */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8 text-white text-base">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link 
                                to={item.path} 
                                className={`hover:text-gray-300 ${location.pathname === item.path ? 'text-yellow-300' : ''}`} // Add active class
                                >{item.Link}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Icons */}
                    <div className='flex space-x-4 px-4 text-white'>
                        <div className='hover:text-yellow-400'>
                            <FaFacebook />
                        </div>
                        <div className='hover:text-yellow-400'>
                            <FaGlobe />
                        </div>
                        <div className='hover:text-yellow-400'>
                            <FaSquareGithub />
                        </div>
                    </div>

                    {/* Login Button */}
                    <button 
                        className='bg-yellow-400 px-4 py-2 rounded-lg text-black hover:bg-gray-200 transition-all duration-200 ease-in'
                    >
                        Login
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && ( // Conditionally render the mobile menu
                <div className="md:hidden text-white">
                    <ul className="flex flex-col space-y-2 bg-black bg-opacity-50 p-4">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link 
                                to={item.path} 
                                className={`hover:text-yellow-300 ${location.pathname === item.path ? 'text-yellow-300' : ''}`} // Add active class
                                onClick={toggleMobileMenu}
                                >{item.Link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Navbar;
