import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./Layouts/Products";
import ProductDetails from "./components/ProductDetails";
import SignInPage from "./routes/SignInPage";
import OrdersReturns from "./routes/OrdersReturns";
import Cart from "./routes/Cart";
import CreateAccout from "./routes/CreateAccout";
import ErrorPage from "./routes/ErrorPage";
import { AuthContexProvider } from "./Contexts/LogInContext";
import Header from "./Layouts/Header";
import { ProductsContextProvider } from "./Contexts/ProductsContext";
import CheckOut from "./routes/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/orders-and-returns",
    element: <OrdersReturns />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/register",
    element: <CreateAccout />,
  },
  {
    path:"/checkoutPage",
    element:<CheckOut></CheckOut>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContexProvider>
      <ProductsContextProvider>
        <RouterProvider router={router}>
          <Header></Header>
          <Home></Home>
          <SignInPage />
          <CreateAccout />
        </RouterProvider>
      </ProductsContextProvider>
    </AuthContexProvider>
  </React.StrictMode>
);
