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

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-teal-700">Patient Queue</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {total.length === 0 ? (
        <p className="text-gray-500 text-xl">No patients registered yet.</p>
      ) : (
        <div className="grid gap-4">
          {total.map((patient, idx) => (
            <div key={idx} className="border-2 border-gray-300 rounded-lg p-4 flex justify-between items-center bg-white/50">
              <div>
                <p><strong>Queue No:</strong> {idx + 1}</p>
                <p><strong>Name:</strong> {patient.name}</p>
                <p><strong>Phone:</strong> {patient.Phone}</p>
              </div>
              <button
                onClick={() => deletePatient(idx)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DoctorDashboard