import React from "react";
import "../css/pages/Services.css";

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay">
          <h1>Servicios</h1>
          <p>
            Descubre todo lo que ofrecemos para tu comodidad y satisfacción.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="services-intro">
        <h2>Servicios de Primera Clase</h2>
        <p>
          Nuestro compromiso es ofrecerte servicios excepcionales que superen
          tus expectativas. Aquí tienes una lista de las experiencias únicas que
          te esperan.
        </p>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        <div className="service-card">
          <div className="icon">🌊</div>
          <h3>Piscina y Jacuzzi</h3>
          <p>
            Relájate en nuestra piscina o disfruta de un momento de
            tranquilidad.
          </p>
        </div>
        <div className="service-card">
          <div className="icon">🛎️</div>
          <h3>Servicio de Concierge</h3>
          <p>Asistencia personalizada para todas tus necesidades.</p>
        </div>
        <div className="service-card">
          <div className="icon">🍴</div>
          <h3>Restaurante Gourmet</h3>
          <p>Deléitate con platos preparados por chefs expertos.</p>
        </div>
        <div className="service-card">
          <div className="icon">💆</div>
          <h3>Spa de Clase Mundial</h3>
          <p>Tratamientos relajantes y revitalizantes para ti.</p>
        </div>
        <div className="service-card">
          <div className="icon">💪</div>
          <h3>Gimnasio Equipado</h3>
          <p>
            Entrena en un espacio moderno con máquinas de última generación.
          </p>
        </div>
        <div className="service-card">
          <div className="icon">🅿️</div>
          <h3>Estacionamiento Seguro</h3>
          <p>Estacionamiento techado y vigilado para tu tranquilidad.</p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="services-highlights">
        <h2>¿Por qué elegirnos?</h2>
        <div className="highlight-list">
          <p className="highlight-item">Atención personalizada las 24 horas.</p>
          <p className="highlight-item">Instalaciones modernas y de lujo.</p>
          <p className="highlight-item">
            Ubicación inmejorable en el corazón de la ciudad.
          </p>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="services-features">
        <h2>Características Adicionales</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Internet de Alta Velocidad</h3>
            <p>Conéctate sin interrupciones en cualquier lugar del complejo.</p>
          </div>
          <div className="feature-item">
            <h3>Salones de Eventos</h3>
            <p>Espacios diseñados para reuniones, celebraciones y eventos.</p>
          </div>
          <div className="feature-item">
            <h3>Áreas Verdes</h3>
            <p>
              Disfruta de jardines y zonas verdes para relajarte al aire libre.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
