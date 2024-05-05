import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../Contexts/ProductsContext";
import { Link } from "react-router-dom";

export default function Subtotal() {
  const { state, subTotalPrice } = useContext(ProductsContext);
  const [total, setTotal] = useState(0);
  const [noItems, setNoTems] = useState(0);

  useEffect(() => {
    // const subTotal = state.reduce((initialValue, currentValue) => {
    //   return initialValue + currentValue.price;
    // }, 0);

    const numberOfItems = state.reduce((initialQrty, currentQrty) => {
      return initialQrty + currentQrty.qrty;
    }, 0);

    // setTotal(subTotal);
    setNoTems(numberOfItems);
  });
  return (
    <div className="subtotal">
      <p>
        Subtotal (<span>{noItems}</span> items): <strong>$</strong>
        <strong>{subTotalPrice}</strong>
      </p>
      <input type="checkbox" name="" id="" />{" "}
      <span>This order contains a gift</span>
      <Link to="/checkoutPage">
        <button className="add_product">Proceed to checkout</button>
      </Link>
    </div>
  );
}
