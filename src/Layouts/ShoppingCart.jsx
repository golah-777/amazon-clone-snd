import React from "react";

export default function ShoppingCart() {
  return (
    <div className="shopping_cart">
      <div className="shopping_header ">
        <h1>Shopping Cart</h1>
        <span>Price</span>
      </div>
      <div className="all_items">
        <div className="product">
          <div className="aa">
            <img src="" alt="" />
          </div>
          <div className="bb">
            <span>
              SAMSUNG Galaxy A35 5G A Series Cell Phone + $40 Amazon Gift Card,
              128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple
              Camera System, Expandable Storage, US Version, 2024, Awesome
              NavySAMSUNG Galaxy A35 5G A Series Cell Phone + $40 Amazon Gift
              Card, 128GB Unlocked Android Smartphone, AMOLED Display, Advanced
              Tr…
            </span>
            <span style={{ color: "green", margin: "5px 0px" }}>In stock</span>
            <div>
              <div className="qrty_delete">
                <div className="qrty">
                  <div className="minus">
                    <span className="material-icons">remove</span>
                  </div>
                  <div className="no_qrty"><span>0</span></div>
                  <div className="plus">
                    <span className="material-icons">add</span>
                  </div>
                </div>
                <span style={{ color: "red", cursor: "pointer" }}>
                  {" "}
                  delete item
                </span>
              </div>
            </div>
          </div>
          <div>
            <strong>$299</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
