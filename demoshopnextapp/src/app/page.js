import Products from "../Components/Products";
import "./globals.css";

export default function Home() {
  const products = [
    {
      id: "p1",
      title: "Nirma",
      amount: 100,
      date: new Date(2021, 4, 14)
    },
    {
      id: "p2",
      title: "Tide",
      amount: 140,
      date: new Date(2021, 5, 12)
    },
    {
      id: "p3",
      title: "Surf Excel",
      amount: 300,
      date: new Date(2022, 11, 9)
    },
    {
      id: "p4",
      title: "Ariel",
      amount: 230,
      date: new Date(2023, 0, 12)
    }
  ];

  return (
    <div>
      <Products item={products} />
    </div>
  );
}