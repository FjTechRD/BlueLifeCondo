import React from "react";
import "../../css/pages/Home.css";
import SocialMedia from "../../components/SocialMedia";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

function LocationSectionHome() {
  return (
    <section className="location-contact-section">
      <h2>Ubicación y Contacto</h2>
      <div className="location-contact-wrapper">
        {/* Sección de Ubicación */}
        <div className="location-section">
          <div className="location-header">
            <FaMapMarkerAlt className="icon-location" />
            <h3>Ubicación</h3>
          </div>
          <p>Playa Chiquita, El Batey, Sosúa, República Dominicana</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.4991077693085!2d-70.5124660244727!3d19.7764247815777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1e3cff4e0f5cd%3A0xffc1d305bbe69be3!2sBlue%20Life!5e0!3m2!1ses-419!2sdo!4v1734921668706!5m2!1ses-419!2sdo"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Blue Life Location"
          ></iframe>
        </div>

        {/* Sección de Contacto */}
        <div className="contact-section">
          <div className="contact-header">
            <h3>Contacto</h3>
          </div>
          <p>
            ¿Tienes preguntas o deseas más información? Contáctanos para recibir
            atención personalizada.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>bluelife20199@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>+1 (646) 523-1968</span>
            </div>
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <span>Lunes a Viernes: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className="social-media-container">
            <h4>Síguenos en nuestras redes sociales</h4>
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSectionHome;
