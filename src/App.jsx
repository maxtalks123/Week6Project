import { useState, useEffect } from "react";
// import "./App.css";
import CookieCounter from "./Cookies/CookieCounter";
import CookieImage from "./Cookies/CookieImage";
import CookiesPerSecond from "./CPS/CookiesPerSecond";
import ResetButton from "./ResetButton/ResetButton";
import { ShopItems } from "./Shop/CookieUpgrades";
import RenderShop from "./Shop/RenderShop";

//Todo:
//shop buy button and alert if not enough. - purchase price in shop from overall cookie number
//styling

export default function App() {
  const [count, setCount] = useState(0);
  const [cps, setCPS] = useState(1);
  useEffect(() => {
    console.log("useEffect working");
    const interval = setInterval(() => {
      setCount((CurrentCount) => CurrentCount + cps);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [cps]);

  return (
    <div>
      <CookieCounter count={count} setCount={setCount} />
      <CookiesPerSecond cps={cps} setCPS={setCPS} />
      <CookieImage incrementCookiesFunction={setCount} />
      <ResetButton functiontoResetCount={setCount} />
      <div className="Shop">
        {ShopItems.map((item) => (
          <RenderShop
            key={item.id}
            itemName={item.Name}
            itemCost={item.Cost}
            itemCPS={item.CPS}
            itemBought={item.Bought}
            itemBuy={item.Buy}
            increaseCPS={setCPS}
            buyItems={setCount}
            count={count}
            cps={cps}
          />
        ))}
      </div>
    </div>
  );
}
