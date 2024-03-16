import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';
import Products from './routes/Products';
import ProductDetails from './components/ProductDetails';


const router = createBrowserRouter([
 {
  path: '/',
  element: <Home />
 },
 {
  path:'/products',
  element:<Products/>
 },
 {
  path:"/products/:id",
  element:<ProductDetails />
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
