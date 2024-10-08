import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-red-800 via-purple-800 to-blue-800'>
      <Navbar/>
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default App
