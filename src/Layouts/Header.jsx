import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import mainLogo from "./amazon-logo-free-png.webp";
import { AuthContex } from "../Contexts/LogInContext";
import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsContext";
import { auth, signOut } from "../Firebase/firebase";

export default function Header() {
  const {
    loggedIn,
    setValidity,
    setEmail,
    setPassword,
    setName,
  } = useContext(AuthContex);

  const { count } = useContext(ProductsContext);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setValidity(() => null);
        setEmail("");
        setPassword("");
        setName("");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <div className="logo">
              <Link to="/">
                <img src={mainLogo} alt="" className="logo-img" />
              </Link>
            </div>
            <div className="nav-links">
              <i className="material-icons">place</i>
              <div>
                <span>Deliver to</span>
                <h4>South Africa</h4>
              </div>
            </div>
            <div className="search">
              <input type="text" placeholder="Seach Amazon" />
              <div>
                <i className="material-icons">search</i>
              </div>
            </div>
            {loggedIn ? (
              <div div className="nav-links-text" onClick={handleLogOut}>
                <span>
                  Hello,<h4>User, log-out?</h4>
                </span>
              </div>
            ) : (
              <Link to="/sign-in">
                <div div className="nav-links-text">
                  <span>
                    Hello,<h4>Sign In</h4>
                  </span>
                </div>
              </Link>
            )}
            <Link to="/orders-and-returns">
              <div className="nav-links-text">
                <span>Returns</span>
                <h4>& Orders</h4>
              </div>
            </Link>
            <Link to="/cart">
              <div className="nav-links">
                <h4 className="items-no">{count}</h4>
                <span className="material-icons cart">shopping_cart</span>
                <h4>Cart</h4>
              </div>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
