import React from "react";
import { STORE_ITEMS } from "./data";
import StoreItem from "./StoreItem";
import "./itemGrid.css";

export default function ItemGrid() {
  return (
    <div className="Grid">
      {STORE_ITEMS.map((item) => (
        <StoreItem item={item} />
      ))}
    </div>
  );
}
