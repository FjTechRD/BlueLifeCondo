import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../shared/shared.css";

const HeaderDesktop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-desktop ${isScrolled ? "scrolled" : ""}`}>
      {isScrolled && (
        <div className="logo">
          <img src="/BLLogo.png" alt="Logo BlueLife" />
        </div>
      )}
      <nav className="desktop-nav">
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
      </nav>
      {isScrolled && <button className="dropdown-button">⚙</button>}
    </div>
  );
};

export default HeaderDesktop;
