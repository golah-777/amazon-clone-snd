import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import mainLogo from "./amazon-logo-free-png.webp";
import { AuthContex } from "../Contexts/Contexts";
import { useContext } from "react";

export default function Header() {
  const {
    auth,
    setAuth,
    setValidity,
    validity,
    setEmail,
    setPassword,
    setName,
  } = useContext(AuthContex);

  const handleLogOut = () => {
    setValidity(()=>null);
    setAuth((prev) => !prev);
    setEmail("");
    setPassword("");
    setName("");
    // localStorage.removeItem('valid');
    // dispatch({type:'change_validity'})
  };

  console.log(validity);
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
              <i class="material-icons">place</i>
              <div>
                <span>Deliver to</span>
                <h4>South Africa</h4>
              </div>
            </div>
            <div className="search">
              <input type="text" placeholder="Seach Amazon" />
              <div>
                <i class="material-icons">search</i>
              </div>
            </div>
            {auth ? (
              <div div className="nav-links-text" onClick={handleLogOut}>
                <span>Hello user,</span>
                <h4>log-Out?</h4>
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
                <h4 className="items-no">0</h4>
                <span class="material-icons cart">shopping_cart</span>
                <h4>Cart</h4>
              </div>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
