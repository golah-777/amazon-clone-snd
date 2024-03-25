import React from "react";
import { Link } from "react-router-dom";
export default function Product({id, title, img, price}) {
  return (
    <>
      <Link to="/products/01">
        <div className="product">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <div className="title">
              <span>{title}</span>
            </div>
            <div className="rating">
              <span></span>
            </div>
            <div className="money">
              <span>${price}</span>
            </div>
            <div className="shipment">
              <span></span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
