// src/Shared/Footer.jsx
import React from "react";
import "./shared.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 BlueLife Condo. Todos los derechos reservados.</p>
      <nav>
        <ul className="footer-links">
          <li>
            <a href="/politica-de-privacidad">Política de privacidad</a>
          </li>
          <li>
            <a href="/terminos">Términos y condiciones</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
