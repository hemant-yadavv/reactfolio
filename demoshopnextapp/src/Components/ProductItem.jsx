'use client'

import { useState } from 'react';
import ProductDate from './ProductDate';

export default function ProductItem(props){
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Added');
    }

    return (
        <div className='max-w-[400px] w-[100%] bg-emerald-400 rounded-lg flex justify-between p-2 px-5 m-1 items-center'>
            <ProductDate date={props.date} />
            <h2 className=' text-green-950 text-[2rem] font-bold'>{title}</h2>
            <button className=' bg-white text-black text-sm p-2 rounded-xl font-bold' onClick={clickHandler}>Add</button>
        </div>
    );
}