import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DoctorLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      if (email === 'doctor@clinic.com' && password === 'doctor123') {
        localStorage.setItem('doctorAuth', 'true')
        navigate('/doctor-dashboard')
      } else {
        setError('Invalid email or password')
      }
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="w-full max-w-md fade-in-up">
        <div className="medical-card p-10 md:p-12 border border-slate-200 shadow-2xl">
          
          {/* Logo & Title */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-4xl">👨‍⚕️</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Doctor Portal</h2>
            <p className="text-slate-600">Manage your patient queue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-slate-700 font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-slate-700 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-red-700 font-semibold">❌ {error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full py-3 text-lg font-semibold shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="inline-block animate-spin">⏳</span>
                  Logging in...
                </>
              ) : (
                'Login to Dashboard'
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
            <p className="text-sm font-semibold text-blue-900 mb-2">📋 Demo Credentials:</p>
            <div className="space-y-1 text-sm text-blue-800">
              <p><strong>Email:</strong> <code className="bg-white px-2 py-1 rounded font-mono">doctor@clinic.com</code></p>
              <p><strong>Password:</strong> <code className="bg-white px-2 py-1 rounded font-mono">doctor123</code></p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Back to <a href="/" className="text-blue-600 font-semibold hover:underline">Home</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorLogin