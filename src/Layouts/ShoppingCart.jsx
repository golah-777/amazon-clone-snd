import React, { useContext } from "react";
import OrderedItems from "./OrderedItems";
import { ProductsContext } from "../Contexts/ProductsContext";

export default function ShoppingCart() {
  const { state } = useContext(ProductsContext);
  return (
    <div className="shopping_cart">
      <div className="shopping_header ">
        <h1>Shopping Cart</h1>
        <span>Price</span>
      </div>
      <div className="all_items">
        {state.map((item) => (
          <OrderedItems
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            key={item.id}
            quantity = {item.qrty}
          />
        ))}
      </div>
    </div>
  );
}
