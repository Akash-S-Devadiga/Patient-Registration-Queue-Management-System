import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="slide-in-down bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <span className="text-blue-600 font-bold text-lg">⚕️</span>
        </div>
        <h2 className="text-2xl font-bold font-poppins hidden md:block">MediClinic</h2>
      </Link>

      <div className='flex gap-2 md:gap-8 items-center'>
        <Link 
          className='text-sm md:text-lg font-medium hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300' 
          to="/">
          Home
        </Link>
        <Link 
          className='text-sm md:text-lg font-medium hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300' 
          to="/doctor-login">
          Doctor Login
        </Link>
        <Link 
          className='text-sm md:text-lg font-medium hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300' 
          to="/help">
          Help
        </Link>
        <Link 
          className='text-sm md:text-lg font-medium hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300' 
          to="/aboutus">
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navbar