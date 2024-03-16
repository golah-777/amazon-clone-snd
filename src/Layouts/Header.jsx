import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
