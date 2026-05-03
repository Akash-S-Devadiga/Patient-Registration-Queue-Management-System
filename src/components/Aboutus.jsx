import React from 'react'

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-teal-700 mb-4">About Us</h1>
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm mb-6">
        <p className="text-gray-800 text-lg leading-relaxed">
          Welcome to <span className="font-semibold text-teal-700">Doctor Name Clinic</span> – your trusted partner in fast, compassionate healthcare. 
          We provide quick medical services with experienced professionals, anytime, anywhere.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-teal-600">🏥 Our Mission</h3>
          <p className="text-gray-700 mt-2">To deliver accessible, high-quality medical care that puts patients first.</p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-teal-600">⭐ Our Values</h3>
          <p className="text-gray-700 mt-2">Integrity, empathy, innovation, and excellence in every interaction.</p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-teal-600">👨‍⚕️ Expert Team</h3>
          <p className="text-gray-700 mt-2">Certified doctors and friendly staff ready to help 24/7.</p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-teal-600">📍 Location</h3>
          <p className="text-gray-700 mt-2">123 Health Street, Medical District, City – or use our online consultation.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs