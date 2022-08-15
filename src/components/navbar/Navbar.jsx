import React from "react";
import estilos from "./nav.module.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className={estilos.navBar}>
          <div className="logo">
            <img src="https://dummyimage.com/100x100/000/fff&text=logo" alt="" />
          </div>
          <ul className={estilos.links}>
            <li>home</li>
            <li>contact</li>
            <li>order</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
