import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const LoginForm = () => {
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

    return (
        <div>
            <form >
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
