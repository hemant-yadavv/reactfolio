import React from 'react'
import logo from "../assets/Logo.svg"
import { Link,NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;

  return (
    <div className='flex justify-evenly'>
      <NavLink to="/">
        <img src={logo} alt="logo" width={160} height={32} loading='lazy' />
      </NavLink>

      <nav>
        <ul  className='flex gap-3'>
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

      <div className="flex ml-5 mr-3 gap-3">
        { !isLoggedIn &&
          <NavLink to="/login">
            <button onClick={()=>{
              setLoggedIn(true);
              toast.success('Logged in!');
            }}
            >Login</button>
          </NavLink>
        }
        { !isLoggedIn &&
          <NavLink to="/signup">
            <button>Sign Up</button>
          </NavLink>
        }
        { isLoggedIn &&
          <NavLink to="/">
            <button onClick={()=>{
              setLoggedIn(false);
              toast.success('Logged Out!');
            }}
            >Log Out</button>
          </NavLink>
        }
        { isLoggedIn &&
          <NavLink to="/dashboard">
            <button>Dashboard</button>
          </NavLink>
        }
      </div>

       
    </div>
  )
}

export default Navbar
