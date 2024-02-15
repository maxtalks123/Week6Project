import { useState } from "react";

export default function CookieShop() {
  const [items, SetItems] = useState([]);
  const shopItems = [
    {
      id: "Item 1",
      Name: "Grandma",
      Cost: 10,
      CPS: 1,
      Buy: "Buy",
    },
    {
      id: "Item 2",
      Name: "Second Oven",
      Cost: 50,
      CPS: 5,
      Buy: "Buy",
    },
    {
      id: "Item 3",
      Name: "Cookie Elves",
      Cost: 100,
      CPS: 10,
      Buy: "Buy",
    },
    {
      id: "Item 4",
      Name: "Factory",
      Cost: 1000,
      CPS: 100,
      Buy: "Buy",
    },
    {
      id: "Item 5",
      Name: "GigaFactory",
      Cost: 10000,
      CPS: 1000,
      Buy: "Buy",
    },
    {
      id: "Item 6",
      Name: "Become the Cookie Monster",
      Cost: 100000,
      CPS: 10000,
      Buy: "Buy",
    },
  ];
  return (
    <div className="CookieShop">
      <h1>Buy your upgrades here!</h1>
      <ul>
        {shopItems.map((item) => (
          <li key={item.id}>
            <p>Upgrade: {item.Name}</p>
            <p>Cost: {item.Cost}</p>
            <p>Cookies Per Second: {item.CPS}</p>
            <button>{item.Buy}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
