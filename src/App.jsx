import { useState, useEffect } from "react";
import "./App.css";
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
      <h1> Welcome to Cookie Clicker </h1>
      <h2>Click the cookie to get more!</h2>
      <div className="functions">
        <CookieCounter count={count} setCount={setCount} />
        <CookiesPerSecond cps={cps} setCPS={setCPS} />
        <CookieImage incrementCookiesFunction={setCount} />
        <ResetButton
          functiontoResetCount={setCount}
          functiontoResetCPS={setCPS}
        />
      </div>
      <div className="Shop">
        <h1>Buy your upgrades here!</h1>
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
