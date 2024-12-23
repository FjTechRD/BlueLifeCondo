import React from "react";
import "../css/pages/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Encabezado con imagen */}
      <header className="about-header">
        <div className="header-overlay">
          <h1>Sobre Nosotros</h1>
          <p>Conoce más acerca de nuestra historia, misión y valores.</p>
        </div>
      </header>

      {/* Sección de historia */}
      <section className="about-section history">
        <h2>Nuestra Historia</h2>
        <p>
          Fundado en 2010, BlueLife Condo nació con la misión de redefinir el
          concepto de vida de lujo. A lo largo de los años, hemos crecido
          gracias a nuestra dedicación a la calidad y la innovación, creando un
          espacio donde las personas puedan disfrutar de un estilo de vida
          excepcional.
        </p>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="about-section mission-vision-values">
        <div className="mvv-grid">
          <div className="mvv-item">
            <h3>Nuestra Misión</h3>
            <p>
              Proporcionar experiencias únicas y un entorno que inspire la
              tranquilidad, el confort y la excelencia en cada detalle.
            </p>
          </div>
          <div className="mvv-item">
            <h3>Nuestra Visión</h3>
            <p>
              Ser líderes en el sector inmobiliario de lujo, reconocidos por
              nuestra innovación, calidad y compromiso con nuestros clientes.
            </p>
          </div>
          <div className="mvv-item">
            <h3>Valores Fundamentales</h3>
            <ul>
              <li>Excelencia</li>
              <li>Innovación</li>
              <li>Compromiso</li>
              <li>Responsabilidad</li>
              <li>Integridad</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="about-section team">
        <h2>Conoce a Nuestro Equipo</h2>
        <p>
          Nuestro equipo está formado por profesionales apasionados y
          experimentados, dedicados a garantizar que cada aspecto de BlueLife
          Condo supere tus expectativas.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="/img/team/ronald.jpg"
              alt="Nombre del miembro del equipo"
            />
            <h3>Roanld Edward Montalvo</h3>
            <p>CEO & Fundadora</p>
          </div>
          <div className="team-member">
            <img
              src="/img/team/ronald.jpg"
              alt="Nombre del miembro del equipo"
            />
            <h3>Wileska Tupete Paniagua</h3>
            <p>Director de Operaciones</p>
          </div>
          <div className="team-member">
            <img
              src="/img/team/ronald.jpg"
              alt="Nombre del miembro del equipo"
            />
            <h3>Javier Gonzalez</h3>
            <p>Tecnologia & Encargado</p>
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="about-section call-to-action">
        <h2>Únete a Nuestra Comunidad</h2>
        <p>
          En BlueLife Condo, creemos en la creación de una comunidad vibrante y
          conectada. Contáctanos hoy para descubrir cómo puedes formar parte de
          nuestra familia.
        </p>
        <a href="/#/contact" className="cta-button">
          Contáctanos
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
