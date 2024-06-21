import React from 'react'
import logo from "../assets/Logo.svg"
import { Link,NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <NavLink to="/">
        <img src={logo} alt="logo" width={160} height={32} loading='lazy' />
      </NavLink>

      <nav>
        <ul  className='flex gap-x-6 text-white'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul> 
      </nav>

      <div className="flex items-center gap-x-4 text-white">
        { !isLoggedIn &&
          <NavLink to="/login">
            <button className="bg-black py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Login</button>
          </NavLink>
        }
        { !isLoggedIn &&
          <NavLink to="/signup">
            <button className="bg-black py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign Up</button>
          </NavLink>
        }
        { isLoggedIn &&
          <NavLink to="/">
            <button onClick={()=>{
              setIsLoggedIn(false);
              toast.success('Logged Out!');
            }}
             className="bg-black py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
            >Log Out</button>
          </NavLink>
        }
        { isLoggedIn &&
          <NavLink to="/dashboard">
            <button className="bg-black py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard</button>
          </NavLink>
        }
      </div>

       
    </div>
  )
}

export default Navbar
