import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  function clickHandler(){
    navigate('/support')
  }

  function backHandler(){
    navigate(-1);
  }

  return (
    <div>
      <div>
        This is Abut Page
      </div>

      <button onClick={clickHandler}>
        Move to Support Page
      </button>

      <button onClick={backHandler}>
        Go Back
      </button>
    </div>
  )
}

export default About
