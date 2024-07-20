import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from '../redux/slices/CounterSlice'

const Counter = () => {

  const count = useSelector( (state) => state.counter.value);
  const dispatch = useDispatch();

  function incrementHandler(){
    dispatch(increment())
  }

  return (
    <div>
      <button onClick={incrementHandler}>
        Increment
      </button>
      <br />
      <br />

      <div>
        {count} 
      </div>

      <br />
      <br />

      <button onClick={()=> dispatch(decrement())}>
        Decrement
      </button>

    </div>
  )
}

export default Counter