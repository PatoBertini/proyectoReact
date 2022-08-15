import React from "react";
import Navbar from "../navbar/Navbar";
import estilos from "./header.module.css";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className={estilos.hero}>
        <div className={estilos.textHero}>
          <h2>BIENVENIDOS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            explicabo deleniti, necessitatibus enim aspernatur itaque?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
