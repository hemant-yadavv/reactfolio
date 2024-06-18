import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { NavLink, useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
        }
    )

    const [showPassword,setShowPassword] = useState(false);

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
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard"); 
    } 

    return (
        <div>
            <form onSubmit={submitHandler}>
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
                <label>
                    <p>
                        Password <sup>*</sup>
                    </p>
                    <input
                        required
                        type={showPassword ? ("text"):("password")}
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        name='password'
                    />
                    <span onClick={()=>setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible />):(<AiOutlineEye />)}
                    </span>
                    <NavLink to="#">
                        <p>Forgot Password</p>
                    </NavLink>
                </label>
                <button>
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default LoginForm
