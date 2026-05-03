import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import Help from "./components/Help"
import AboutUs from "./components/Aboutus"
import DoctorLogin from "./components/DoctorLogin"
import DoctorDashboard from "./components/DoctorDashboard"

// Protected route component for doctor dashboard
const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem('doctorAuth') === 'true'
  return isAuth ? children : <Navigate to="/doctor-login" replace />
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/doctor-dashboard" element={
          <ProtectedRoute>
            <DoctorDashboard />
          </ProtectedRoute>
        } />
        <Route path="/help" element={<Help />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App