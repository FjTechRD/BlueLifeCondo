import React from "react";
import "../css/pages/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Encabezado con imagen */}
      <header className="contact-header__contact-page">
        <div className="header-overlay">
          <h1>Contáctanos</h1>
          <p>
            ¿Tienes preguntas? Estamos aquí para ayudarte. Completa el
            formulario o utiliza los datos de contacto para comunicarte con
            nosotros.
          </p>
        </div>
      </header>

      {/* Sección de formulario */}
      <section className="contact-form-section">
        <h2>Formulario de Contacto</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tu mensaje"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </section>

      {/* Detalles de contacto */}
      <section className="contact-details-section">
        <h2>Detalles de Contacto</h2>
        <p>
          También puedes comunicarte con nosotros a través de los siguientes
          medios:
        </p>
        <div className="contact-details">
          <div className="detail-item">
            <i className="fas fa-phone-alt"></i>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="detail-item">
            <i className="fas fa-envelope"></i>
            <p>info@bluelifecondo.com</p>
          </div>
          <div className="detail-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>123 Calle Principal, Ciudad, País</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
