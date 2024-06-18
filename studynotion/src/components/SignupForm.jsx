import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  )

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    ))
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("Password doesn't match");
      return ;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard"); 
} 

  return (
    <div>
      <div>
        <button>
          Student
        </button>
        <button>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.firstname}
              onChange={changeHandler}
              placeholder='Enter firstname'
              name='firstname'
            />
          </label>
          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.lastname}
              onChange={changeHandler}
              placeholder='Enter lastname'
              name='lastname'
            />
          </label>
        </div>
        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email id'
            name='email'
          />
        </label>
        <div>
          <label>
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              value={formData.password}
              onChange={changeHandler}
              placeholder='Enter Password'
              name='password'
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>
          </label>
          <label>
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              required
              type="password"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder='Confirm Password'
              name='confirmPassword'
            />
          </label>
        </div>
        <button>
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm
