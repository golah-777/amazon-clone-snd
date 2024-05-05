import React from "react";
import logo from "../routes/R.png";
import OrderedItems from "../Layouts/OrderedItems";
import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsContext";

export default function CheckOut() {
  const { state } = useContext(ProductsContext);
  return (
    <div className="checout_page">
      <header className="checkout-header">
        <div className="checkout_logo">
          <img src={logo} alt="" />
        </div>
        <div className="checkout_no_items">
          <h1>Checkout (0 items)</h1>
        </div>
        <div>
          <span className="material-icons">lock</span>
        </div>
      </header>
      <div>
        <div className="checkout_body">
          <div className="checkout_info">
            <div className="checkout_infos">
              {" "}
              <h3>1</h3>
              <h3>Shipping Address</h3>
              <div className="address">
                <span>THABA NCHU, 04 KlOPPER STREET</span>
                <span>27 FDC FLATS</span>
                <span>Bloemfontein, free state 9780</span>
              </div>
            </div>
          </div>
          <div className="checkout_info">
            <div className="checkout_infos">
              {" "}
              <h3>2</h3>
              <h3>Review Item(s) and delivery</h3>
            </div>
            <div className="all_items">
              {state.map((item) => (
                <OrderedItems
                  id={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  key={item.id}
                  quantity={item.qrty}
                  border='0px solid transparent'
                  display='none'
                  variant="checkOut_qrty"
                  background="white"
                />
              ))}
            </div>
          </div>
          <div className="checkout_info">
            <div className="checkout_infos">
              {" "}
              <h3>3</h3>
              <h3>Payment method</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
