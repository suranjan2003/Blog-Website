import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='w-screen h-screen bg-gradient-to-r from-red-800 via-purple-800 to-blue-800'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
