import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./shared.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p>
        {t("footer.copyright")}{" "}
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
            <a href="/politica-de-privacidad"> {t("footer.privacy_policy")} </a>
          </li>
          <li>
            <a href="/terminos"> {t("footer.terms_conditions")} </a>
          </li>
          <li>
            <a href="/contacto"> {t("home.contact")} </a>
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
