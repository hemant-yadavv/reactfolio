import './App.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [isLoggedIn,setLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>Page Not found</h1>} />
      </Routes>
    </div>
  )
}

export default App
