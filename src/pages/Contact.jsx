import React from "react";
import { useTranslation } from "react-i18next";
import "../css/pages/Contact.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      {/* Encabezado con imagen */}
      <header className="contact-header__contact-page">
        <div className="header-overlay">
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.description")}</p>
        </div>
      </header>

      {/* Sección de formulario */}
      <section className="contact-form-section">
        <h2>{t("contact.contact_form-title")}</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t("contact.contact_form-name")}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("contact.contact_form-name-placeholder")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t("contact.contact_form-email")}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("contact.contact_form-email-placeholder")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t("contact.contact_form-message")}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder={t("contact.contact_form-message-placeholder")}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            {t("contact.contact_form-submit")}
          </button>
        </form>
      </section>

      {/* Detalles de contacto */}
      <section className="contact-details-section">
        <h2>{t("contact.contact_details-title")}</h2>
        <p>{t("contact.contact_details-description")}</p>
        <div className="contact-details">
          <div className="detail-item">
            <i className="fas fa-phone-alt"></i>
            <p>{t("contact.contact_details-phone")}</p>
          </div>
          <div className="detail-item">
            <i className="fas fa-envelope"></i>
            <p>{t("contact.contact_details-email")}</p>
          </div>
          <div className="detail-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>{t("contact.contact_details-address")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
