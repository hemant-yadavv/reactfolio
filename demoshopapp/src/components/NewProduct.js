import FormProduct from "./FormProduct";
function NewProduct(props){

    function saveProduct(product){
        console.log("I am inside new product");
        console.log(product)

        props.onprintProduct(product);
    }

    return (<div>
        <FormProduct onSaveProduct = {saveProduct}/>
    </div>);
}

export default NewProduct;