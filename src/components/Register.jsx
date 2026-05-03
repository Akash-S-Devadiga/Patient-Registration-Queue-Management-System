import React, { useContext } from 'react'
import { DataContext } from '../context/Datacontext'

const Register = () => {
  const { value1, setvalue1, value2, setvalue2, total, settotal } = useContext(DataContext)

  const submithandler = (e) => {
    e.preventDefault();
    if (value1.trim() === "" || value2.trim() === "") {
      alert("Please fill all the fields")
      return
    }
    const tottall = {
      name: value1,
      Phone: value2,
      timestamp: new Date().toLocaleTimeString()
    }
    settotal(prev => [...prev, tottall])
    setvalue1("")
    setvalue2("")
  }

  return (
    <div className="container-medical py-12">
      <div className="grid md:grid-cols-2 gap-8">

        {/* Registration Form Section */}
        <div className="fade-in-up">
          <div className="medical-card p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">📝</div>
              <h2 className="text-3xl font-bold text-slate-900">Patient Registration</h2>
            </div>

            <form onSubmit={submithandler} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="block text-slate-700 font-semibold text-lg">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={value1}
                  onChange={(e) => setvalue1(e.target.value)}
                  className="input-field"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label className="block text-slate-700 font-semibold text-lg">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={value2}
                  onChange={(e) => setvalue2(e.target.value)}
                  className="input-field"
                  required
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-secondary w-full text-lg py-4 mt-8 shadow-lg hover:shadow-xl"
              >
                Register & Get Queue Number
              </button>
            </form>

            {/* Info Box */}
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <p className="text-slate-700"><strong>ℹ️ How it works:</strong></p>
              <p className="text-slate-600 mt-2">1. Fill in your details and register</p>
              <p className="text-slate-600">2. Get your queue number instantly</p>
              <p className="text-slate-600">3. See your position in real-time</p>
              <p className="text-slate-600">4. Wait your turn comfortably</p>
            </div>
          </div>
        </div>

        {/* Queue Display Section */}
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-2xl">👥</div>
              <h3 className="text-3xl font-bold text-slate-900">Patient Queue</h3>
            </div>
            <p className="text-slate-600 text-lg mb-6">
              {total.length === 0 
                ? "No patients registered yet. Be the first!" 
                : `${total.length} patient${total.length !== 1 ? 's' : ''} waiting`}
            </p>

            {/* Queue List */}
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {total.length === 0 ? (
                <div className="medical-card p-8 text-center">
                  <p className="text-6xl mb-4">🏥</p>
                  <p className="text-slate-600 text-lg">No registrations yet</p>
                </div>
              ) : (
                total.map((data, idx) => {
                  const isNext = idx === 0; // First patient in queue
                  
                  return (
                    <div 
                      key={idx} 
                      className={isNext ? "next-patient-card" : "medical-card p-6 border-2 border-slate-200"}
                    >
                      {isNext && <div className="next-patient-badge">NEXT →</div>}
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <div className={isNext ? "queue-number-next" : "queue-number text-4xl font-bold text-blue-600"}>
                            #{idx + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-lg font-semibold text-slate-900">{data.name}</p>
                            <p className="text-sm text-slate-500">📞 {data.Phone}</p>
                            <p className="text-xs text-slate-400 mt-1">⏰ {data.timestamp}</p>
                          </div>
                        </div>

                        {isNext && (
                          <div className="pt-3 border-t-2 border-emerald-200 mt-4">
                            <p className="text-sm font-semibold text-emerald-700 animate-pulse">
                              🎯 You're next! Get ready to be seen.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })
              )}
            </div>

            {/* Queue Stats */}
            {total.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="medical-card p-4 text-center">
                  <p className="text-3xl font-bold text-blue-600">{total.length}</p>
                  <p className="text-sm text-slate-600">Total Patients</p>
                </div>
                <div className="medical-card p-4 text-center">
                  <p className="text-3xl font-bold text-emerald-600">1</p>
                  <p className="text-sm text-slate-600">Ahead: {total.length - 1}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register