import React, { useState } from 'react'

const Help = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How to register as a patient?",
      answer: "Click on 'Register' in the navbar, fill in your name and phone number, then click 'Register'. Your queue number will be assigned automatically. You can see your position on the registration page."
    },
    {
      question: "How to see my queue position?",
      answer: "After registration, your name and queue number appear on the right side of the Register page. The queue number starts from 1. You can refresh the page anytime to see the current queue status."
    },
    {
      question: "What are the doctor login details?",
      answer: "Email: doctor@clinic.com | Password: doctor123. Only doctors can access the dashboard to manage patient queues. These are demo credentials for testing purposes."
    },
    {
      question: "What should I do if I can't see my queue number?",
      answer: "Make sure you've filled all the required fields (name and phone number) correctly. Refresh the page to see the updated queue. Contact support if the issue persists."
    },
    {
      question: "Can I modify my details after registration?",
      answer: "Currently, you can register again with updated information. Contact our support team if you need to modify existing registration details."
    },
    {
      question: "How long will I have to wait?",
      answer: "Average wait time is 10-15 minutes per patient. The actual wait depends on the complexity of each case. Your queue position helps you estimate your turn."
    },
    {
      question: "Is there a way to cancel my registration?",
      answer: "You can contact our clinic directly to cancel. Call +1 (234) 567-8900 or email support@medicalclinic.com with your phone number."
    },
    {
      question: "What if I'm late for my appointment?",
      answer: "We recommend arriving 5 minutes before your turn. If you're significantly delayed, please contact us. We'll accommodate you if possible."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container-medical space-y-12">

        {/* Header */}
        <div className="fade-in-up text-center space-y-4 py-8">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900">Help Center</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and how to use MediClinic
          </p>
        </div>

        {/* Quick Links */}
        <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="medical-card p-6 text-center hover:shadow-lg cursor-pointer border-t-4 border-blue-500">
              <p className="text-4xl mb-2">📝</p>
              <p className="font-semibold text-slate-900">Registration</p>
              <p className="text-sm text-slate-600 mt-1">Get started quickly</p>
            </div>
            <div className="medical-card p-6 text-center hover:shadow-lg cursor-pointer border-t-4 border-emerald-500">
              <p className="text-4xl mb-2">👥</p>
              <p className="font-semibold text-slate-900">Queue System</p>
              <p className="text-sm text-slate-600 mt-1">Track your position</p>
            </div>
            <div className="medical-card p-6 text-center hover:shadow-lg cursor-pointer border-t-4 border-teal-500">
              <p className="text-4xl mb-2">👨‍⚕️</p>
              <p className="font-semibold text-slate-900">Doctor Login</p>
              <p className="text-sm text-slate-600 mt-1">Portal access</p>
            </div>
            <div className="medical-card p-6 text-center hover:shadow-lg cursor-pointer border-t-4 border-orange-500">
              <p className="text-4xl mb-2">❓</p>
              <p className="font-semibold text-slate-900">General Help</p>
              <p className="text-sm text-slate-600 mt-1">More information</p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="medical-card overflow-hidden border-2 border-slate-200 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-6 flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-slate-900 text-left">
                    {faq.question}
                  </h3>
                  <span className={`text-2xl text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="border-t-2 border-slate-200 bg-slate-50 px-6 py-4 fade-in-up">
                    <p className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Still Need Help?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="medical-card p-8 border-l-4 border-blue-500">
              <p className="text-4xl mb-4">📞</p>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 mb-4">
                Speak with our support team directly
              </p>
              <p className="text-2xl font-bold text-blue-600">+1 (234) 567-8900</p>
              <p className="text-sm text-slate-500 mt-2">Available 24/7</p>
            </div>

            <div className="medical-card p-8 border-l-4 border-emerald-500">
              <p className="text-4xl mb-4">✉️</p>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">
                Get detailed responses to your questions
              </p>
              <p className="text-lg font-bold text-emerald-600 break-all">support@medicalclinic.com</p>
              <p className="text-sm text-slate-500 mt-2">Response within 2 hours</p>
            </div>

            <div className="medical-card p-8 border-l-4 border-teal-500">
              <p className="text-4xl mb-4">📍</p>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600 mb-4">
                Come see us in person
              </p>
              <p className="font-bold text-teal-600">123 Health Street</p>
              <p className="text-sm text-slate-600 mt-1">Medical District, City</p>
            </div>

          </div>
        </div>

        {/* Video Tutorial Section */}
        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="medical-card p-10 bg-gradient-to-r from-blue-100 to-teal-100 border-2 border-blue-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">📺 How to Use MediClinic</h2>
                <p className="text-slate-700 mb-6">
                  Watch our quick tutorial videos to learn how to register, track your queue position, and get the most out of MediClinic's features.
                </p>
                <button className="btn-primary">Watch Tutorial Videos</button>
              </div>
              <div className="text-6xl">🎥</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Help