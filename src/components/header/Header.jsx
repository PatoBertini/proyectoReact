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
            Aca va un banner con una imagen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
