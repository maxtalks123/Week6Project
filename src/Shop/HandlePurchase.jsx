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
    // if (count < itemCost) return console.log("You can't purchase this item");
    // else count - itemCost;
    // console.log(count);
    // console.log("item purchased");
    // increaseCPS = cps + itemCPS;
    // itemBought = itemBought + 1;
    // return increaseCPS;
    buyItems(count - itemCost);
    increaseCPS(cps + itemCPS);
    setItemBought(itemBought + 1);
    console.log(increaseCPS);
  }
  //   function purchaseFail() {
  //     alert("You can't purchase this item");
  //     console.log("purchaseFail");
  //   }
  //   function updateShopAndCPS() {
  //     increaseCPS + itemCPS;
  //     count - itemCost;
  //     itemBought + 1;
  //     console.log("update shop");
  //   }
  return <button onClick={purchase}>Buy</button>;
}

// export default function Button({ increaseCPS, cookieCount }) {
//   function updateCookies() {
//     cookieCount >= itemCost
//       ? count - itemCost
//       : alert("you can't purchase this item");
//   }
//   {
//     item.Buy;
//   }
//   return <button onClick={updateCookies}>Buy</button>;
// }
