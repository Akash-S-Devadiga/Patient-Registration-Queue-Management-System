import React from 'react'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container-medical space-y-12">

        {/* Hero Section */}
        <div className="fade-in-up text-center space-y-4 py-8">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">MediClinic</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your trusted partner in fast, compassionate healthcare. We provide quick medical services with experienced professionals, anytime, anywhere.
          </p>
        </div>

        {/* Main Intro */}
        <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="medical-card p-10 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🏥</div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Who We Are</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Welcome to <span className="font-bold text-blue-600">MediClinic</span> – your trusted partner in fast, compassionate healthcare. 
                  With cutting-edge technology and experienced medical professionals, we revolutionize the way patients access healthcare services. 
                  Our mission is to make quality medical care accessible to everyone, removing barriers of time and distance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="medical-card p-8 hover:shadow-lg border-t-4 border-blue-500">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-700 leading-relaxed">
                We leverage the latest technology to provide efficient, modern healthcare solutions that improve patient experiences and outcomes.
              </p>
            </div>

            <div className="medical-card p-8 hover:shadow-lg border-t-4 border-emerald-500">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Compassion</h3>
              <p className="text-slate-700 leading-relaxed">
                Every patient deserves care and respect. Our team treats each person with empathy, patience, and genuine concern for their wellbeing.
              </p>
            </div>

            <div className="medical-card p-8 hover:shadow-lg border-t-4 border-teal-500">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Reliability</h3>
              <p className="text-slate-700 leading-relaxed">
                You can count on us 24/7. Our consistent, dependable service ensures you always have access to quality healthcare when you need it most.
              </p>
            </div>

            <div className="medical-card p-8 hover:shadow-lg border-t-4 border-orange-500">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-700 leading-relaxed">
                We maintain the highest standards in medical practice, continuously improving our services to exceed patient expectations and provide superior care.
              </p>
            </div>

          </div>
        </div>

        {/* Features Section */}
        <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="medical-card p-8 text-center hover:shadow-lg transition-all">
              <div className="text-6xl mb-4 inline-block">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Team</h3>
              <p className="text-slate-600">
                Certified doctors and friendly staff with years of experience in various medical fields, ready to help you 24/7.
              </p>
            </div>

            <div className="medical-card p-8 text-center hover:shadow-lg transition-all">
              <div className="text-6xl mb-4 inline-block">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Service</h3>
              <p className="text-slate-600">
                Minimal waiting time with an efficient queue management system that respects your time and schedules appointments smartly.
              </p>
            </div>

            <div className="medical-card p-8 text-center hover:shadow-lg transition-all">
              <div className="text-6xl mb-4 inline-block">🔒</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Secure & Private</h3>
              <p className="text-slate-600">
                Your health data is protected with industry-standard security. We maintain strict privacy and confidentiality standards.
              </p>
            </div>

            <div className="medical-card p-8 text-center hover:shadow-lg transition-all">
              <div className="text-6xl mb-4 inline-block">📍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Accessible</h3>
              <p className="text-slate-600">
                Located at prime locations with easy access, or use our online consultation services from the comfort of your home.
              </p>
            </div>

            <div className="medical-card p-8 text-center hover:shadow-lg transition-all">
              <div className="text-6xl mb-4 inline-block">💳</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Affordable</h3>
              <p className="text-slate-600">
                Competitive pricing with flexible payment options to make healthcare affordable for everyone in the community.
              </p>
            </div>

            <div className="medical-card p-8 text-center hover:shadow-lg transition-all">
              <div className="text-6xl mb-4 inline-block">🌟</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Excellence</h3>
              <p className="text-slate-600">
                Rated highly by our patients for our professional service, clean facilities, and commitment to patient satisfaction.
              </p>
            </div>

          </div>
        </div>

        {/* Contact Section */}
        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="medical-card p-10 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center border-0">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-2">📞 Phone</p>
                <p className="text-2xl font-semibold">+1 (234) 567-8900</p>
              </div>
              <div>
                <p className="text-lg mb-2">✉️ Email</p>
                <p className="text-2xl font-semibold">support@medicalclinic.com</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-lg">📍 Location</p>
              <p className="text-xl font-medium">123 Health Street, Medical District, City</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs