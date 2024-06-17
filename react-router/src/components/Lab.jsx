import React from 'react'
import { useNavigate } from 'react-router-dom'

const Lab = () => {
  const navigate = useNavigate();

  function clcikHandler(){
    navigate('/about');
  }

  return (
    <div>
      <div>
        This is Lab page
      </div>
      <button onClick={clcikHandler}>
        Move to About Page
      </button>
    </div>
  )
}

export default Lab
Lab