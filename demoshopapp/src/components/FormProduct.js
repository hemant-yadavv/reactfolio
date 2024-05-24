import { useState } from "react";
import NewProduct from "./NewProduct";

function FormProduct(props){

        // const [fullProductInput,setfullProductInput] = useState({
        //     title:'',
        //     date:''
        // });

        // function setfullProductInput(){

        // }

        const [newTitle,setTitle] = useState('')
        const [newDate,setDate] = useState('')

        function titleChangeHandler(event){
            setTitle(event.target.value);
            console.log(event.target.value);
        }

        function dateChangeHandler(event){
            setDate(event.target.value);
            console.log(event.target.value);
        }

        function submitHandler(event){
            event.preventDefault();

            const productData = {
                title:newTitle,
                date:newDate
            };

            // console.log(productData);
            props.onSaveProduct(productData);
 
            setTitle('');
            setDate('');
        }


    return (<form onSubmit={submitHandler}>
        <div>
            <label>Title</label>
            <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div>
            <label>Date</label>
            <input type="date"  value={newDate} onChange={dateChangeHandler} min="2023-01-01" max="2023-12-12"></input>
        </div>
        <div>
            <button type="submit">Add product</button>
        </div>
    </form>);
}

export default FormProduct;