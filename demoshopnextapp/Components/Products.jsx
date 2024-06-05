import ProductItem from './ProductItem';

export default function Products(props){
    return (
        <div className=' bg-yellow-200 max-w-[450px] rounded-xl w-[100%] m-auto my-2 py-2 flex flex-col items-center'>
            <ProductItem 
                title={props.item[0].title}
                date={props.item[0].date}
            />
            <ProductItem 
                title={props.item[1].title}
                date={props.item[1].date}
            />
            <ProductItem 
                title={props.item[2].title}
                date={props.item[2].date}
            />
            <ProductItem 
                title={props.item[3].title}
                date={props.item[3].date}
            />
        </div>
    );
}