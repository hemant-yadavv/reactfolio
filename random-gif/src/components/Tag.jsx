import React, { useState } from 'react'
import Spinner from "./Spinner";
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag,setTag] = useState('');
  const [gif,setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(url);
    // console.log(data)
    const imageSource = data.data.images.downsized_large.url;
      // console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }

  function clickHandler(){
    fetchData();
  }

  function changeHandler(event){
    setTag(event.target.value);
  }

  return (
    <div className="w-1/2  bg-blue-400 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
    <h1 className="mt-[15px] text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
    {loading ? <Spinner /> : <img src={gif} width="450" />}
    
    <input 
      className="w-10/12 bg-slate-300 text-xl py-2 rounded-lg font-bold mb-[3px] text-center"
      type="text" 
      onChange={changeHandler}
      value={tag}
      placeholder='Search for a GIF'
      />
    
    <button
      onClick={clickHandler}
      className="w-10/12 bg-slate-300 text-xl py-2 rounded-lg font-bold mb-[20px]"
    >
      Generate
    </button>
  </div>
  )
}

export default Tag
