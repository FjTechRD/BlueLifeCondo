import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useScroll from "../../hooks/useScroll";
import { useTranslation } from "react-i18next";
import "../../shared/shared.css";
import ThemeToggle from "./ThemeToggle";

const HeaderDesktop = () => {
  const isScrolled = useScroll();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const settingsRef = useRef(null);

  const toggleSettings = () => setSettingsOpen((prev) => !prev);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSettingsOpen(false); // Cerrar el menú tras cambiar idioma
  };

  const handleClickOutside = (event) => {
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
    <div className={`header-desktop ${isScrolled ? "scrolled" : "top"}`}>
      {isScrolled && <ThemeToggle />}
      <nav className={`desktop-nav ${isScrolled ? "scrolled" : ""}`}>
        <ul>
          <li>
            <a href="/">{t("header.home")}</a>
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
        <div ref={settingsRef} className="settings-menu">
          <button onClick={() => alert("Modo Claro/Oscuro activado")}>
            Modo Claro/Oscuro
          </button>
          <div className="languages__changer">
            <button onClick={() => changeLanguage("en")}>
              <img src="/img/flags/estados-unidos.png" alt="" /> EN
            </button>
            <button onClick={() => changeLanguage("es")}>
              <img src="/img/flags/espana.png" alt="" /> ES
            </button>
            <button onClick={() => changeLanguage("de")}>
              <img src="/img/flags/alemania.png" alt="" /> DE
            </button>
            <button onClick={() => changeLanguage("ru")}>
              <img src="/img/flags/rusia.png" alt="" /> RU
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderDesktop;
