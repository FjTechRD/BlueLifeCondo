import React from "react";
import { useTranslation } from "react-i18next";
import "../css/pages/Services.css";

const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay">
          <h1>{t("services.title")}</h1>
          <p>{t("services.title-description")}</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="services-intro">
        <h2>{t("services.first_class_services")}</h2>
        <p>{t("services.first_class_services-description")}</p>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        <div className="service-card">
          <div className="icon">🌊</div>
          <h3>{t("services.pol-and-jaccuzi-title")}</h3>
          <p>{t("services.pol-and-jaccuzi-content")}</p>
        </div>
        <div className="service-card">
          <div className="icon">🛎️</div>
          <h3>{t("services.service-Concierge-title")}</h3>
          <p>{t("services.service-Concierge-content")}</p>
        </div>
        <div className="service-card">
          <div className="icon">🍴</div>
          <h3>{t("services.service-restaurant-title")}</h3>
          <p>{t("services.service-restaurant-content")}</p>
        </div>
        <div className="service-card">
          <div className="icon">💆</div>
          <h3>{t("services.service-spa-title")}</h3>
          <p>{t("services.service-spa-content")}</p>
        </div>
        <div className="service-card">
          <div className="icon">💪</div>
          <h3>{t("services.service-gym-title")}</h3>
          <p>{t("services.service-gym-content")}</p>
        </div>
        <div className="service-card">
          <div className="icon">🅿️</div>
          <h3>{t("services.service-garage-title")}</h3>
          <p>{t("services.service-garage-content")}</p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="services-highlights">
        <h2>{t("services.why_choose_us")}</h2>
        <div className="highlight-list">
          <p className="highlight-item">{t("services.choose-op-1")}</p>
          <p className="highlight-item">{t("services.choose-op-2")}</p>
          <p className="highlight-item">{t("services.choose-op-3")}</p>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="services-features">
        <h2>{t("services.additional_features-title")}</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>{t("services.additional_wifi-title")}</h3>
            <p>{t("services.additional_wifi-content")}</p>
          </div>
          <div className="feature-item">
            <h3>{t("services.additional_event-title")}</h3>
            <p>{t("services.additional_event-content")}</p>
          </div>
          <div className="feature-item">
            <h3>{t("services.additional_green-title")}</h3>
            <p>{t("services.additional_green-content")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
