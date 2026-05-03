import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import Help from "./components/Help"
import AboutUs from "./components/Aboutus"
import DoctorLogin from "./components/DoctorLogin"
import DoctorDashboard from "./components/DoctorDashboard"

// Protected route component
const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem('doctorAuth') === 'true'
  return isAuth ? children : <Navigate to="/doctor-login" />
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-teal-100">
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
      </Routes>
    </div>
  )
}

export default App