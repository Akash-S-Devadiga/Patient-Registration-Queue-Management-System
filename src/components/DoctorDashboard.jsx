import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/Datacontext'

const DoctorDashboard = () => {
  const { total, settotal } = useContext(DataContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('doctorAuth')
    navigate('/doctor-login')
  }

  const deletePatient = (indexToDelete) => {
    settotal(prev => prev.filter((_, idx) => idx !== indexToDelete))
  }

  const markAsProcessing = (indexToDelete) => {
    deletePatient(indexToDelete)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container-medical">
        
        {/* Header Section */}
        <div className="fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">👨‍⚕️</div>
                <h1 className="text-4xl font-bold text-slate-900">Doctor Dashboard</h1>
              </div>
              <p className="text-slate-600">Manage your patient queue efficiently</p>
            </div>
            <button
              onClick={handleLogout}
              className="btn-danger shadow-lg hover:shadow-xl"
            >
              Logout
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="medical-card p-6 text-center">
              <p className="text-4xl font-bold text-blue-600">{total.length}</p>
              <p className="text-slate-600 mt-2">Total Patients</p>
            </div>
            <div className="medical-card p-6 text-center">
              <p className="text-4xl font-bold text-emerald-600">{Math.max(0, total.length - 1)}</p>
              <p className="text-slate-600 mt-2">Waiting</p>
            </div>
            <div className="medical-card p-6 text-center">
              <p className="text-4xl font-bold text-orange-600">{total.length > 0 ? 1 : 0}</p>
              <p className="text-slate-600 mt-2">In Queue</p>
            </div>
            <div className="medical-card p-6 text-center">
              <p className="text-4xl font-bold text-teal-600">15</p>
              <p className="text-slate-600 mt-2">Min Wait</p>
            </div>
          </div>
        </div>

        {/* Queue Section */}
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          {total.length === 0 ? (
            <div className="medical-card p-12 text-center border-2 border-dashed border-slate-300">
              <p className="text-6xl mb-4">✅</p>
              <p className="text-2xl font-semibold text-slate-600 mb-2">All Patients Processed!</p>
              <p className="text-slate-500">Great job today! All registered patients have been seen.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Current Patient (Next in Queue) */}
              {total.length > 0 && (
                <div className="next-patient-card">
                  <div className="next-patient-badge">NOW SERVING</div>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="queue-number-next mb-2">Patient #{1}</div>
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-slate-900">
                          Name: <span className="text-emerald-700">{total[0].name}</span>
                        </p>
                        <p className="text-lg text-slate-700">
                          Phone: <span className="font-medium">{total[0].Phone}</span>
                        </p>
                        <p className="text-sm text-emerald-600 font-semibold">
                          ⏰ Waiting since: {total[0].timestamp}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => markAsProcessing(0)}
                      className="btn-secondary whitespace-nowrap shadow-lg hover:shadow-xl"
                    >
                      Patient Seen ✓
                    </button>
                  </div>
                </div>
              )}

              {/* Remaining Queue */}
              {total.length > 1 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Waiting Queue</h3>
                  <div className="grid gap-3 max-h-96 overflow-y-auto">
                    {total.slice(1).map((patient, idx) => (
                      <div 
                        key={idx + 1} 
                        className="medical-card p-6 hover:shadow-lg border-2 border-slate-200 flex justify-between items-center group"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center">
                            <p className="text-2xl font-bold text-blue-600">#{idx + 2}</p>
                          </div>
                          <div className="flex-1">
                            <p className="text-lg font-semibold text-slate-900">{patient.name}</p>
                            <p className="text-sm text-slate-500">📞 {patient.Phone}</p>
                            <p className="text-xs text-slate-400 mt-1">⏰ {patient.timestamp}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => deletePatient(idx + 1)}
                          className="btn-danger opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard