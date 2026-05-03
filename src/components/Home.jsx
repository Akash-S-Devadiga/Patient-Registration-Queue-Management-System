import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="container-medical flex flex-col md:flex-row items-center justify-between gap-12 min-h-screen">
        {/* Left Content */}
        <div className="flex-1 fade-in-up space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
              Quality Healthcare,
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Made Easy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-lg">
              Get instant access to trusted medical services with experienced professionals. Your health, our priority - anytime, anywhere.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md">
            <div className="medical-card p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">500+</p>
              <p className="text-sm text-slate-600">Patients</p>
            </div>
            <div className="medical-card p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">24/7</p>
              <p className="text-sm text-slate-600">Available</p>
            </div>
            <div className="medical-card p-4 text-center">
              <p className="text-2xl font-bold text-teal-600">99%</p>
              <p className="text-sm text-slate-600">Satisfied</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex gap-4 items-center">
            <Link
              to="/register"
              className="btn-primary shadow-lg hover:shadow-2xl inline-flex items-center gap-2 text-lg"
            >
              Register Now
              <span className="text-xl">→</span>
            </Link>
            <Link
              to="/aboutus"
              className="btn-outline inline-flex items-center gap-2 text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex-1 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
              <div className="space-y-4">
                <div className="flex items-center gap-4 medical-card p-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">👨‍⚕️</div>
                  <div>
                    <p className="font-semibold text-slate-900">Expert Doctors</p>
                    <p className="text-sm text-slate-500">Verified & Certified</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 medical-card p-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-2xl">⚡</div>
                  <div>
                    <p className="font-semibold text-slate-900">Quick Service</p>
                    <p className="text-sm text-slate-500">Minimal wait time</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 medical-card p-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-2xl">🔒</div>
                  <div>
                    <p className="font-semibold text-slate-900">Secure & Private</p>
                    <p className="text-sm text-slate-500">Your data protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home