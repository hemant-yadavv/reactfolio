import React,{useState} from 'react';
import './Item.css'

function Item(props) {
    // const itemName = props.name;
    // let item = props.name;
    const [item,setTitle] = useState(props.name);
    function clickHandler(){
        // item = "Popcorn";
        setTitle("Popcorn");
        console.log("button clicked");
    }
    return (
        <div>
            <p className="nirma">{item}</p>
            {props.children}
            <button onClick={clickHandler}>change title</button>
        </div>
    );
}

export default Item;