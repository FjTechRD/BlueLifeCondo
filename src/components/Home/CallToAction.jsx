import React from "react";
import "../../css/pages/Home.css";

function CallToAction() {
  return (
    <section className="calltoaction-section">
      <div className="calltoaction-content">
        <h2 className="calltoaction-title">¡Descubre tu nuevo hogar!</h2>
        <p className="calltoaction-description">
          Vive en un lugar donde la comodidad y el estilo se encuentran. Haz
          realidad tus sueños hoy.
        </p>
        <a href="#contact" className="calltoaction-button">
          Contáctanos
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
