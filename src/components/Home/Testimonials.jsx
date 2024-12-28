import React from "react";
import { useTranslation } from "react-i18next";
import "../../css/pages/Home.css";

function Testimonials() {
  const { t } = useTranslation();
  const testimonials = [
    {
      text: t("home.reviews-client1"),
      author: "María G.",
    },
    {
      text: t("home.reviews-client2"),
      author: "Juan P.",
    },
    {
      text: t("home.reviews-client3"),
      author: "Sofía R.",
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">{t("home.reviews")}</h2>
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
