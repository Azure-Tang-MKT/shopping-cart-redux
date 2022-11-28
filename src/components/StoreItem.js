import React from "react";
import "./StoreItem.css";

const StoreItem = ({ item }) => {
  console.log(item);
  return (
    <div className="GridItem">
      <img src={item.src} alt="item.id"></img>
      <div>{item.title}</div>
      <button>{`Add to Cart - $${item.price}`}</button>
    </div>
  );
};

export default StoreItem;
