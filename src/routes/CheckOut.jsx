import React, { useState, useEffect } from "react";
import logo from "../routes/R.png";
import OrderedItems from "../Layouts/OrderedItems";
import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { Await } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51PCITeDoH5XrD5vtI6JYcVaw4MlPwFYNEEwcUP60n300IDd33dyhF3g3CuzE9O6ttFum8gLXpvTZ1DYDqbdmX6kl00MNYTI79r"
);

export default function CheckOut() {
  const { state } = useContext(ProductsContext);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads(res) => res.json()

    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res)=>{
        if(!res.ok){
          throw new Error('Network response was not ok');
        }else{

        }
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch();

    // console.log(clientSecret);
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/create-payment-intent', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ items: [] }) // pass any necessary data
  //       });
        
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
        
  //       const data = await response.json();
  //       console.log(data);
        
  //       // Handle the response data as needed
  //     } catch (error) {
  //       console.error('There was a problem with your fetch operation:', error);
  //     }
  //   };
    
  //   fetchData();
  // }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

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
                  border="0px solid transparent"
                  display="none"
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
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
