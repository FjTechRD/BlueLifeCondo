import React, { useState } from "react";
import "../../shared/shared.css";

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSettings = () => setSettingsOpen(!settingsOpen);

  return (
    <header className="header-mobile">
      {/* Botón para abrir el menú */}
      <button
        className="menu-button"
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Logo centrado */}
      <div className="logo">
        <img src="/BLLogo.png" alt="Logo BlueLife" className="logo__mobile" />
      </div>

      {/* Botón de configuraciones */}
      <button
        className="settings-button"
        onClick={toggleSettings}
        aria-label="Abrir configuraciones"
      >
        ⚙
      </button>

      {/* Menú desplegable */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
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

      {/* Configuraciones desplegables */}
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
    </header>
  );
};

export default HeaderMobile;
