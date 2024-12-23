import React from "react";
import "../../css/pages/Home.css";

function Testimonials() {
  const testimonials = [
    {
      text: "El lugar perfecto para nuestra familia, las amenidades son increíbles.",
      author: "María G.",
    },
    {
      text: "Un servicio excepcional, nunca había vivido en un lugar tan bien pensado.",
      author: "Juan P.",
    },
    {
      text: "La ubicación es ideal y el ambiente es simplemente inmejorable.",
      author: "Sofía R.",
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">Lo que dicen nuestros clientes</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <span className="testimonial-author">- {testimonial.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
