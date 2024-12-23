import React from "react";
import "../../css/pages/Home.css";

function ApartmentCards() {
  const apartments = [
    {
      type: "1 Habitación",
      quantity: 3,
      bathrooms: 1,
      furnished: "Sí",
      kitchen: "Americana",
      bed: "Cama Queen Size",
      img: "/img/apartments__home.webp",
    },
    {
      type: "2 Habitaciones",
      quantity: 36,
      bathrooms: 2,
      furnished: "Sí",
      kitchen: "Americana",
      bed: "Cama Queen Size",
      img: "/img/apartments__home.webp",
    },
    {
      type: "4 Habitaciones",
      quantity: 3,
      bathrooms: 3,
      furnished: "Sí",
      kitchen: "Americana",
      bed: "Cama Queen Size",
      img: "/img/apartments__home.webp",
    },
  ];

  return (
    <section className="apartment-cards">
      <h2 className="section-title__apartments">Apartamentos</h2>
      <p className="section-description__apartments">
        Explora la variedad de apartamentos disponibles en nuestro condominio.
        Cada unidad está diseñada para ofrecer comodidad, estilo y
        funcionalidad.
      </p>
      <div className="cards-container">
        {apartments.map((apt, index) => (
          <div key={index} className="card">
            <img
              src={apt.img}
              alt={`Apartamento de ${apt.type}`}
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-title">{apt.type}</h3>
              <ul className="card-details">
                <li>
                  <strong>{apt.quantity}</strong> disponibles
                </li>
                <li>
                  <strong>Baños:</strong> {apt.bathrooms}
                </li>
                <li>
                  <strong>Amueblado:</strong> {apt.furnished}
                </li>
                <li>
                  <strong>Cocina:</strong> {apt.kitchen}
                </li>
                <li>
                  <strong>Cama:</strong> {apt.bed}
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
