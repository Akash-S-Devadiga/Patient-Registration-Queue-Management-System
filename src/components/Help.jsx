import React from 'react'

const Help = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-teal-700 mb-6">Help Center</h1>
      <div className="space-y-4">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-teal-600">How to register as a patient?</h3>
          <p className="text-gray-700 mt-2">Click on "Register" in the navbar, fill in your name and phone number, then click "Register". Your queue number will be assigned automatically.</p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-teal-600">How to see my queue position?</h3>
          <p className="text-gray-700 mt-2">After registration, your name and queue number appear on the right side of the Register page. The queue number starts from 1.</p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-teal-600">Doctor login details?</h3>
          <p className="text-gray-700 mt-2">Email: doctor@clinic.com | Password: doctor123. Only doctors can access the dashboard to manage patient queues.</p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-teal-600">Contact support</h3>
          <p className="text-gray-700 mt-2">📞 +1 234 567 8900 &nbsp;|&nbsp; ✉️ support@medicalclinic.com</p>
        </div>
      </div>
    </div>
  )
}

export default Help