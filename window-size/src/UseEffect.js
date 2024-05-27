import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function UseEffect() {
  const [text,setText] = useState('');
  const [name,setName] = useState('love');

  // variation 1 -> every render
  // useEffect( ()=>{
  //   console.log("UI rendering done");
  // });

  // variation 2 -> first render
  // useEffect( ()=>{
  //   console.log("UI rendering done");
  // },[]);

  // variation 3 -> first render + whenever dependency changes
  // useEffect( ()=>{
  //   console.log("UI rendering done");
  // },[name]);

  // variation 4 -> to handle unmounting of a component
  useEffect( ()=>{
    // added listner
    console.log("listener added");

    return ()=>{
      console.log("listner removed");
    }
  },[text]);

  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div>
      <input className="bg-slate-400" type="text" onChange={changeHandler} />
    </div>
  );
}

export default UseEffect;