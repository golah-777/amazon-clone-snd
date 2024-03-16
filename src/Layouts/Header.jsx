import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import mainLogo from "./amazon-logo-free-png.webp";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <div className="logo">
            <NavLink to="/">
              <img src={mainLogo} alt="" className="logo-img" />
            </NavLink>
          </div>
          <div className="nav-links">
            <i class="material-icons">place</i>
            <div>
              <span>Deliver to</span>
              <h4>South Africa</h4>
            </div>
          </div>
          <div className="search">
            <input type="search" placeholder="Seach Amazon" />
            <div>
              <i class="material-icons">search</i>
            </div>
          </div>
          <NavLink>
            <div div className="nav-links-text">
              <span>Hello,</span>
              <h4>Sign In</h4>
            </div>
          </NavLink>
          <div className="nav-links-text">
            <span>Returns</span>
            <h4>& Orders</h4>
          </div>
          <NavLink>
            <div className="nav-links">
              <h4 className="items-no">0</h4>
              <span class="material-icons cart">shopping_cart</span>
              <h4>Cart</h4>
            </div>
          </NavLink>
          {/* <li>
            <NavLink activeClassName="active" to="/">
              {" "}
              Home
            </NavLink>
          </li>
          <div>
            <NavLink activeClassName="active" to="/products">
            </NavLink>
          </div> */}
        </ul>
      </nav>
    </header>
  );
}
