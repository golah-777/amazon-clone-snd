import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';
import Products from './Layouts/Products';
import ProductDetails from './components/ProductDetails';
import SignInPage from './routes/SignInPage';
import OrdersReturns from './routes/OrdersReturns';
import Cart from './routes/Cart';


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
 },
 {
  path:"/sign-in",
  element: <SignInPage />
 },
 {
  path:'/orders-and-returns',
  element:<OrdersReturns />
 },
 {
  path:'/cart',
  element:<Cart />
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
