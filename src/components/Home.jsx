import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container flex items-center justify-between min-h-screen p-20">
      <div className="box1">
        <h1 className='text-4xl font-bold text-teal-700'>Get Quick</h1>
        <h1 className='text-4xl font-bold text-teal-700'>Medical Services</h1>
        <p className='w-200 text-3xl text-teal-600'>
          "Get instant access to trusted medical services with experienced professionals. Your health, our priority - anytime, anywhere."
        </p>
      </div>
      <div className="box2">
        <Link
          to="/register"
          className="inline-block bg-teal-600 text-white text-3xl font-bold px-12 py-6 rounded-2xl shadow-lg hover:bg-teal-700 transition duration-300"
        >
          Register Now →
        </Link>
      </div>
    </div>
  )
}

export default Home