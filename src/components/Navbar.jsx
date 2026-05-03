import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-teal-600 text-white text-3xl shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h2>Doctor Name</h2>
      <div className='flex gap-5'>
        <Link className='hover:text-green-300' to="/">Home</Link>
        {/* Register link removed */}
        <Link className='hover:text-green-300' to="/doctor-login">Doctor Login</Link>
        <Link className='hover:text-green-300' to="/help">Help</Link>
        <Link className='hover:text-green-300' to="/aboutus">About Us</Link>
      </div>
    </div>
  )
}

export default Navbar