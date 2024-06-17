import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Support from "./components/Support"
import About from "./components/About"
import Lab from "./components/Lab"
import NotFound from "./components/NotFound"
import MainHeader from './components/MainHeader'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/lab">Lab</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          {/* // this becomes default route */}
          <Route index element={<Home/>}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/lab" element={<Lab />}></Route>
          <Route path="/contact" element={<div>Contact Page</div>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
