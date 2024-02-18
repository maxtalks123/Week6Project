export default function HandlePurchase({
  increaseCPS,
  buyItems,
  setItemBought,
  itemBought,
  itemCost,
  itemCPS,
  count,
  cps,
}) {
  function purchase() {
    if (count < itemCost)
      alert("You don't have enough cookies to purchase this item");
    else buyItems(count - itemCost);
    increaseCPS(cps + itemCPS);
    setItemBought(itemBought + 1);
    console.log(increaseCPS);
  }
  return <button onClick={purchase}>Buy</button>;
}

//function to set items bought back to 0
//styling
