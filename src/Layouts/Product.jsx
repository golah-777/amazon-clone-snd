import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../Contexts/ProductsContext";
export default function Product({ id, title, img, price }) {
  const { addToCart } = useContext(ProductsContext);

  const handleAddToCart = () => {
    addToCart(id, title, img, price);
  };
  return (
    <>
      {/* <Link to="/products/01">
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
              <button onClick={handleAddToCart}>Add To Cart</button>
            </div>
          </div>
        </div>
      </Link> */}

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
            <button onClick={handleAddToCart} className="add_product">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
