import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DoctorLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
   
    if (email === 'doctor@clinic.com' && password === 'doctor123') {
      localStorage.setItem('doctorAuth', 'true')
      navigate('/doctor-dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">Doctor Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-2 text-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-2 text-lg"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Demo: doctor@clinic.com / doctor123
        </p>
      </div>
    </div>
  )
}

export default DoctorLogin