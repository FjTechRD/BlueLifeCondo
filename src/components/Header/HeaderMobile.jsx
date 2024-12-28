import React, { useState } from "react";
import "../../shared/shared.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSettings = () => setSettingsOpen(!settingsOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
            <Link to="/">{t("header.home")}</Link>
          </li>
          <li>
            <Link to="/services">{t("header.services")}</Link>
          </li>
          <li>
            <Link to="/about-us">{t("header.about_us")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("header.contact")}</Link>
          </li>
        </ul>
      </nav>

      {/* Configuraciones desplegables */}
      {settingsOpen && (
        <div className="settings-menu">
          <button onClick={() => alert("Modo Claro/Oscuro activado")}>
            Modo Claro/Oscuro
          </button>
          <div className="languages__changer">
            <button onClick={() => changeLanguage("en")}>
              {" "}
              <img
                src="/img/flags/estados-unidos.png"
                alt="bandera estados unidos (lenguaje ingles)"
              />{" "}
              EN
            </button>
            <button onClick={() => changeLanguage("es")}>
              {" "}
              <img
                src="/img/flags/espana.png"
                alt="bandera españa (lenguaje español)"
              />{" "}
              ES
            </button>
            <button onClick={() => changeLanguage("de")}>
              {" "}
              <img
                src="/img/flags/alemania.png"
                alt="bandera alemana (lenguaje aleman)"
              />{" "}
              DE
            </button>
            <button onClick={() => changeLanguage("ru")}>
              {" "}
              <img
                src="/img/flags/rusia.png"
                alt="bandera rusia (lenguaje ruso)"
              />{" "}
              RU
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderMobile;
