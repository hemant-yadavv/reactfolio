import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';
import NewProduct from './components/NewProduct';

function App() {
  const itemTwoName = "Surf Excel";
  const response = [
    {
      itemName: "001",
      itemDate: "20",
      itemMonth: "June",
      itemYear: "1998",
    },
    {
      itemName: "002",
      itemDate: "202",
      itemMonth: "June2",
      itemYear: "19982",
    },
    {
      itemName: "003",
      itemDate: "203",
      itemMonth: "June3",
      itemYear: "19983",
    }
  ];

  function printProductData(data){
    console.log("i am inside app.js");
    console.log(data);
  }

  return ( 
    <>
      
      <NewProduct onprintProduct = {printProductData}/>
      <Card>
        <Item name="Nirma">
          Hello jee main hu apki fiirst item</Item>
        <ItemDate day="30" month="June" year="1997" />
        <Item name={itemTwoName} />
        <ItemDate day="31" month="July" year="1997" />
        <Item name={response[2].itemName} > </Item>
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear} />

        <div className="App">
          hello jee
        </div>
      </Card>
    </>
  );
}

export default App;
