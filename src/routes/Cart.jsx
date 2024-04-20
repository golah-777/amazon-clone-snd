import React from 'react'
import Header from '../Layouts/Header'
import ShoppingCart from '../Layouts/ShoppingCart'
import Subtotal from '../Layouts/Subtotal.jsx'

export default function Cart() {
  return (
    <div>
      <Header />
      <main>
        <div className='shopping_cart_subtotal'>
          <ShoppingCart/>
          <Subtotal />
        </div>
      </main>
    </div>
  )
}
