import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../Contexts/ProductsContext";
import { AuthContex } from "../Contexts/LogInContext";
export default function Product({ id, title, img, price ,qrty}) {
  const { addToCart } = useContext(ProductsContext);
  const {user}= useContext(AuthContex)
  
  const handleAddToCart = () => {
    addToCart(id, title, img, JSON.parse(price) ,JSON.parse(qrty), user);
  };
  return (
    <>
      <div className="product">
        <div className="product_img_div">
          <img src={img} alt="" />
        </div>
        <div>
          <div className="title">
            <p>{title}</p>
          </div>
          <div className="rating">
            <span></span>
          </div>
          <div className="money">
            <span className="dollar">$</span>
            <span>{price}</span>
          </div>
          <div className="shipment">
            <button onClick={handleAddToCart} className="add_product">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
