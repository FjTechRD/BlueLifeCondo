import React from "react";
import {
  FaSwimmingPool,
  FaBolt,
  FaWater,
  FaShieldAlt,
  FaWifi,
  FaParking,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../../css/pages/Home.css";

function AmenitiesSection() {
  const { t } = useTranslation();
  const amenities = [
    { name: t("home.amenities-pool"), icon: <FaSwimmingPool /> },
    { name: t("home.amenities-genertor"), icon: <FaBolt /> },
    { name: t("home.amenities-water"), icon: <FaWater /> },
    { name: t("home.amenities-security"), icon: <FaShieldAlt /> },
    { name: t("home.amenities-wifi"), icon: <FaWifi /> },
    { name: t("home.amenities-garage"), icon: <FaParking /> },
  ];

  return (
    <section className="amenities-section">
      <div className="parallax-background ">
        <div className="amenities-content">
          <h2 className="section-title-amenidades">{t("home.amenities")}</h2>
          <p className="section-description">
            {t("home.amenities-description")}
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
