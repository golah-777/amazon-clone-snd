import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../Contexts/ProductsContext";


export default function OrderedItems({
  id,
  title,
  img,
  price,
  border,
  display,
  variant,
  background,
  quantity,
}) {
  const { deleteItem, decreamentQrty, increamentQrty, setSubTotalP } =
    useContext(ProductsContext);
  const [itemPrice, setPrice] = useState(price);

  useEffect(() => {
    setPrice(price * quantity)
    return () => {
      setTimeout(() => {
        const prices = document.querySelectorAll(".price");
        let newPrice = 0;
        prices.forEach((price) => (newPrice += parseInt(price.textContent)));
        setSubTotalP(newPrice);
      }, 100);
    };
  }, [price, quantity]);

  const handleIncrement = () => increamentQrty(id);
  const handleDecreament = () => decreamentQrty(id);
  const handleDelete = () => deleteItem(id);

  return (
    <div className="product" id={id} style={{ border }}>
      <div className="aa">
        <img src={img} alt="" />
      </div>
      <div className="bb">
        <span>{title}</span>
        <span style={{ color: "green", margin: "5px 0px" }}>In stock</span>
        <div>
          <div className="qrty_delete">
            <span className="vv">Qrty:</span>
            <div className={`qrty `} style={{ background }}>
              <div
                className="minus"
                onClick={handleDecreament}
                style={{ display }}
              >
                <span className="material-icons">remove</span>
              </div>
              <div className={`no_qrty ${variant}`}>
                <span className="qrty_value"> {quantity} </span>
                {/**/}
              </div>
              <div
                className="plus"
                onClick={handleIncrement}
                style={{ display }}
              >
                <span className="material-icons">add</span>
              </div>
            </div>
            <span
              style={{ color: "red", cursor: "pointer" }}
              onClick={handleDelete}
            >
              {" "}
              delete item
            </span>
          </div>
        </div>
      </div>
      <div>
        <strong>$</strong>
        <strong className="price">{itemPrice}</strong>
        {/*  */}
      </div>
    </div>
  );
}
