import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./shared.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; 2024 BlueLife Condo. Todos los derechos reservados. | Diseñado
        por{" "}
        <a
          className="footer__designed__reference"
          href="https://www.facebook.com/profile.php?id=100087280723773"
        >
          FjTechRD
        </a>
      </p>
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
      <div className="footer-social">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
