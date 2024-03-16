import React from 'react'
import Header from '../Layouts/Header'
import { useParams } from "react-router-dom"
export default function ProductDetails() {
  const params = useParams();
  return (
    <>
      <Header></Header>
      <main>
       <h1>Product Details</h1>
       <p>{params.id}</p>
      </main>
    </>
  )
}
