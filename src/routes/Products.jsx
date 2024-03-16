import React from 'react'
import Header from '../Layouts/Header'
import { Link } from 'react-router-dom'
export default function Products() {
  return (
  
    <>
      <Header />
      <main>
       <h1>Products</h1>
       <ul>
         <li><Link to="/products/01">Product 1</Link></li>
         <li><Link to="/products/02">Product 2</Link></li>
         <li><Link to="/products/03">Product 3</Link></li>
       </ul>
      </main>
    </>
  )
}
