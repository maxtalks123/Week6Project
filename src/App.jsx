import { useState, useEffect } from "react";
// import "./App.css";
import CookieShop from "./Cookies/CookieShop";
import CookieCounter from "./Cookies/CookieCounter";
import CookieImage from "./Cookies/CookieImage";
import CookiesPerSecond from "./CPS/CookiesPerSecond";

//Todo:
//make sure setCPS works
//button functionality for reset button
//functionality for clicking cookie to get more cookies
//shop buy button and alert if not enough. - purchase price in shop from overall cookie number
//styling
//local storage
//navbar

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
      <CookieImage />
      <CookieShop />
      {/* <CookieCounter />
      <Timer count={count} setCount={setCount} />
      <ResetButton functionToResetCount={setCount} /> */}
    </div>
  );
}
