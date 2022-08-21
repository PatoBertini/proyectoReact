import React from "react";
import './navbar.css'
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navBar">
          <div className="logo">
            <img src="https://dummyimage.com/100x100/000/fff&text=logo" alt="" />
          </div>
          <ul className="links">
            <li>home</li>
            <li>contact</li>
            <li>order</li>
          </ul>
            <CartWidget/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
