import HandlePurchase from "./HandlePurchase";
import { useState } from "react";
import "./RenderShop.css";

export default function RenderShop({
  itemName,
  itemCost,
  itemCPS,
  increaseCPS,
  buyItems,
  count,
  cps,
}) {
  const [itemBought, setItemBought] = useState(0);
  return (
    <div className="CookieShop">
      <ul>
        <li>
          <p>Upgrade: {itemName}</p>
          <p>Cost: {itemCost}</p>
          <p>Cookies Per Second: {itemCPS}</p>
          <p>Amount bought: {itemBought}</p>
          <HandlePurchase
            increaseCPS={increaseCPS}
            buyItems={buyItems}
            setItemBought={setItemBought}
            itemBought={itemBought}
            itemCost={itemCost}
            itemCPS={itemCPS}
            count={count}
            cps={cps}
          />
        </li>
      </ul>
    </div>
  );
}
