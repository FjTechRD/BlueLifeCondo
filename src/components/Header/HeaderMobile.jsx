import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../shared/shared.css";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-mobile">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className="logo">
        <img src="/BLLogo.png" alt="Logo BlueLife" />
      </div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/apartamentos">Apartamentos</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/ubicacion">Ubicación</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobile;
