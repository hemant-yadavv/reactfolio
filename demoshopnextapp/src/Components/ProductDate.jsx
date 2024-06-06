
export default function ProductDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className=' bg-black max-w-[130px] w-[100%] text-white flex justify-center items-center flex-col p-3 rounded-md m-2'>
            <div className=' font-bold text-2xl'>{month}</div>
            <div className='text-sm'>{day}</div>
            <div className='text-lg'>{year}</div>
        </div>
    );
}