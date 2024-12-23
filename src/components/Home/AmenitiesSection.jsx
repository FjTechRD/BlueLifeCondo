import React from "react";
import {
  FaSwimmingPool,
  FaBolt,
  FaWater,
  FaShieldAlt,
  FaWifi,
  FaParking,
} from "react-icons/fa";
import "../../css/pages/Home.css";

function AmenitiesSection() {
  const amenities = [
    { name: "Piscina", icon: <FaSwimmingPool /> },
    { name: "Generador eléctrico", icon: <FaBolt /> },
    { name: "Agua potable", icon: <FaWater /> },
    { name: "Seguridad 24h", icon: <FaShieldAlt /> },
    { name: "Wi-Fi de alta velocidad", icon: <FaWifi /> },
    { name: "Parqueo techado", icon: <FaParking /> },
  ];

  return (
    <section className="amenities-section">
      <div className="parallax-background ">
        <div className="amenities-content">
          <h2 className="section-title-amenidades">Amenidades</h2>
          <p className="section-description">
            Disfruta de una amplia variedad de servicios diseñados para tu
            comodidad y estilo de vida.
          </p>
          <ul className="amenities-list">
            {amenities.map((amenity, index) => (
              <li key={index} className="amenity-item">
                <div className="amenity-icon">{amenity.icon}</div>
                <span className="amenity-name">{amenity.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AmenitiesSection;
