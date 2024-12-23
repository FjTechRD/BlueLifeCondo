import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScroll from "../../hooks/useScroll";
import "../../shared/shared.css";

const HeaderDesktop = () => {
  const isScrolled = useScroll();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleSettings = () => setSettingsOpen(!settingsOpen);

  return (
    <div className={`header-desktop ${isScrolled ? "scrolled" : "top"}`}>
      {isScrolled && (
        <div className="logo">
          <img src="/BLLogo.png" alt="Logo BlueLife" />
        </div>
      )}
      <nav className={`desktop-nav ${isScrolled ? "scrolled" : ""}`}>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <Link to="/services">Servicios</Link>
          </li>
          <li>
            <Link to="/about-us">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
      {isScrolled && (
        <button
          className="settings-button"
          onClick={toggleSettings}
          aria-label="Abrir configuraciones"
        >
          ⚙
        </button>
      )}
      {settingsOpen && (
        <div className="settings-menu">
          <button onClick={() => alert("Modo Claro/Oscuro activado")}>
            Modo Claro/Oscuro
          </button>
          <button onClick={() => alert("Configuraciones abiertas")}>
            Configuraciones
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderDesktop;
