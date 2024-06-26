import './App.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import PrivateRoute from './components/PrivateRoute'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-black flex flex-col w-screen h-screen">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<h1>Page Not found</h1>} />
        <Route path="dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default App
