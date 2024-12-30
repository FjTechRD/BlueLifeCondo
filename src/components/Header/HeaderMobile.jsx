import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../shared/shared.css";
import ThemeToggle from "./ThemeToggle";

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const menuRef = useRef(null);
  const settingsRef = useRef(null);
  const { i18n, t } = useTranslation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleSettings = () => setSettingsOpen((prev) => !prev);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSettingsOpen(false); // Cerrar el menú de configuraciones tras cambiar el idioma
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
    if (settingsRef.current && !settingsRef.current.contains(event.target)) {
      setSettingsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <a href="/">
          <img src="/BLLogo.png" alt="Logo BlueLife" className="logo__mobile" />
        </a>
      </div>

      {/* Botón de configuraciones */}
      <button
        className="settings-button"
        onClick={toggleSettings}
        aria-label="Abrir configuraciones"
      >
        ⚙
      </button>

      {/* Menú de navegación */}
      <nav
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)} // Cerrar al seleccionar una opción
      >
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

      {/* Configuraciones */}
      {settingsOpen && (
        <div ref={settingsRef} className="settings-menu">
          <ThemeToggle />
          <div className="languages__changer">
            <button onClick={() => changeLanguage("en")}>
              <img
                src="/img/flags/estados-unidos.png"
                alt="bandera estados unidos (lenguaje ingles)"
              />{" "}
              EN
            </button>
            <button onClick={() => changeLanguage("es")}>
              <img
                src="/img/flags/espana.png"
                alt="bandera españa (lenguaje español)"
              />{" "}
              ES
            </button>
            <button onClick={() => changeLanguage("de")}>
              <img
                src="/img/flags/alemania.png"
                alt="bandera alemana (lenguaje aleman)"
              />{" "}
              DE
            </button>
            <button onClick={() => changeLanguage("ru")}>
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
