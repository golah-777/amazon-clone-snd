import React from 'react'

export default function OrderedItems() {
  return (
    <div>
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
    </div>
  )
}
