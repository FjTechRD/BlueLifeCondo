import React from "react";
import { useTranslation } from "react-i18next";
import "../../css/pages/Home.css";

function ApartmentCards() {
  const { t } = useTranslation();
  const apartments = [
    {
      type: `1 ${t("home.apartments-type")}`,
      quantity: 3,
      bathrooms: 1,
      furnished: t("General.yes"), // Agregar traducción si está disponible
      kitchen: t("home.apartments-Cuisine"),
      bed: t("home.apartments-Bed"),
      img: "/img/apartments__home.webp",
    },
    {
      type: `2 ${t("home.apartments-type", { count: 2 })}`,
      quantity: 36,
      bathrooms: 2,
      furnished: t("General.yes"),
      kitchen: t("home.apartments-Cuisine"),
      bed: t("home.apartments-Bed"),
      img: "/img/apartments__home.webp",
    },
    {
      type: `4 ${t("home.apartments-type", { count: 4 })}`,
      quantity: 3,
      bathrooms: 3,
      furnished: t("General.yes"),
      kitchen: t("home.apartments-Cuisine"),
      bed: t("home.apartments-Bed"),
      img: "/img/apartments__home.webp",
    },
  ];

  return (
    <section className="apartment-cards">
      <h2 className="section-title__apartments">{t("home.apartments")}</h2>
      <p className="section-description__apartments">
        {t("home.apartments-description")}
      </p>
      <div className="cards-container">
        {apartments.map((apt, index) => (
          <div key={index} className="card">
            <img
              src={apt.img}
              alt={`${t("apartments")} ${apt.type}`}
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-title">{apt.type}</h3>
              <ul className="card-details">
                <li>
                  <strong>{apt.quantity}</strong>{" "}
                  {t("home.apartments-available")}
                </li>
                <li>
                  <strong>{t("General.Bathrooms")}</strong>: {apt.bathrooms}
                </li>
                <li>
                  <strong>{t("General.Furnished")}</strong>: {apt.furnished}
                </li>
                <li>
                  <strong>{t("General.Cuisine")}</strong>: {apt.kitchen}
                </li>
                <li>
                  <strong>{t("General.bed")}</strong>: {apt.bed}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ApartmentCards;
