import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {

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
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    ))
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Password doesn't match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-slate-700 p-1 my-0 gap-x-1 rounded-full max-w-max">
        <button
        className={`${accountType == "student"
          ?
          "bg-black py-1 px-6 rounded-full transition-all duration-200"
          : "bg-transparent py-1 px-6 rounded-full transition-all duration-200"
        }`}
          onClick={() => setAccountType("student")}>
          Student
        </button>
        <button
        className={`${accountType == "instructor"
          ?
          "bg-black py-1 px-6 rounded-full transition-all duration-200"
          : "bg-transparent py-1 px-6 rounded-full transition-all duration-200"
        }`}
          onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4">
          <label htmlFor='' className="w-full">
            <p lassName="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.firstname}
              onChange={changeHandler}
              placeholder='Enter firstname'
              name='firstname'
              className="bg-black rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.lastname}
              onChange={changeHandler}
              placeholder='Enter lastname'
              name='lastname'
              className="bg-black rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        </div>
        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email id'
            name='email'
            className="bg-black rounded-[0.75rem] w-full p-[12px] text-richblack-5"
          />
        </label>
        <div className="flex gap-x-4">
          <label htmlFor="" className='w-full relative'>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              value={formData.password}
              onChange={changeHandler}
              placeholder='Enter Password'
              name='password'
              className="bg-black rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
            <span
              className='absolute right-3 top-[45px] cursor-pointer'
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
            </span>
          </label>
          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="password"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder='Confirm Password'
              name='confirmPassword'
              className="bg-black rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        </div>
        <button className="bg-yellow-400 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black w-full">
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm
