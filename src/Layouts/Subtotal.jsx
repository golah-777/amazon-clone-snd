import React from 'react'

export default function Subtotal() {
  return (
    <div className='subtotal'>
      <p>Subtotal (3 items): <strong>$449.98</strong></p>
      <input type="checkbox" name="" id="" /> <span>This order contains a gift</span>
      <button className='add_product'>Proceed to checkout</button>
    </div>
  )
}
