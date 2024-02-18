export const ShopItems = [
  {
    id: "Item 1",
    Name: "Grandma",
    Cost: 10,
    CPS: 1,
    Bought: 0,
    Buy: "Buy",
  },
  {
    id: "Item 2",
    Name: "Second Oven",
    Cost: 50,
    CPS: 5,
    Bought: 0,
    Buy: "Buy",
  },
  {
    id: "Item 3",
    Name: "Cookie Elves",
    Cost: 100,
    CPS: 10,
    Bought: 0,
    Buy: "Buy",
  },
  {
    id: "Item 4",
    Name: "Factory",
    Cost: 1000,
    CPS: 100,
    Bought: 0,
    Buy: "Buy",
  },
  {
    id: "Item 5",
    Name: "GigaFactory",
    Cost: 10000,
    CPS: 1000,
    Bought: 0,
    Buy: "Buy",
  },
  {
    id: "Item 6",
    Name: "Become the Cookie Monster",
    Cost: 100000,
    CPS: 10000,
    Bought: 0,
    Buy: "Buy",
  },
];
//   return (
//     <div className="CookieShop">
//       <h1>Buy your upgrades here!</h1>
//       <ul>
//         {shopItems.map((item) => (
//           <li key={item.id}>
//             <p>Upgrade: {item.Name}</p>
//             <p>Cost: {item.Cost}</p>
//             <p>Cookies Per Second: {item.CPS}</p>
//             <p>Amount bought: {item.Bought}</p>
//             <button
//               onClick={() =>
//                 buyItems((count) =>
//                   count >= item.Cost
//                     ? count - item.Cost
//                     : alert("you can't purchase this item")
//                 )
//               }
//             >
//               {item.Buy}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// //
