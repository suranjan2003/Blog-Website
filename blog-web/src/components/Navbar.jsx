import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navItems = [
        {path: '/', Link: 'Home'},
        {path: '/blogs', Link: 'Blogs'},
        {path: '/about', Link: 'About'},
        {path: '/contact', Link: 'Contact'}
    ]

  return (
    <header className='bg-black'>
        <nav className="px-4 py-4 flex justify-between items-center">
            <a href="/" className="classname-logo text-xl font-bold text-white">Design<span className='text-yellow-500'>SK</span></a>
            <ul className="flex space-x-8 text-base ml-auto">
                {navItems.map((item, index) => (
                    <li key={index}>
                    <Link to={item.path} className="text-white hover:text-gray-300">{item.Link}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>

  )
}

export default Navbar