import React from "react";
import { useTranslation } from "react-i18next";
import "../css/pages/AboutUs.css";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us-page">
      {/* Encabezado con imagen */}
      <header className="about-header">
        <div className="header-overlay">
          <h1>{t("about_us.title")}</h1>
          <p>{t("about_us.title-description")}</p>
        </div>
      </header>

      {/* Sección de historia */}
      <section className="about-section history">
        <h2>{t("about_us.our_history-title")}</h2>
        <p>{t("about_us.our_history-description")}</p>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="about-section mission-vision-values">
        <div className="mvv-grid">
          <div className="mvv-item">
            <h3>{t("about_us.our_mission-title")}</h3>
            <p>{t("about_us.our_mission-description")}</p>
          </div>
          <div className="mvv-item">
            <h3>{t("about_us.our_vision-title")}</h3>
            <p>{t("about_us.our_vision-description")}</p>
          </div>
          <div className="mvv-item">
            <h3>{t("about_us.core_values-title")}</h3>
            <ul>
              {t("about_us.core_values-list", { returnObjects: true }).map(
                (value, index) => (
                  <li key={index}>{value}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="about-section team">
        <h2>{t("about_us.meet_team-title")}</h2>
        <p>{t("about_us.meet_team-description")}</p>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="/img/team/ronald.jpg"
              alt={t("about_us.team_members.0.name")}
            />
            <h3>{t("about_us.team_members.0.name")}</h3>
            <p>{t("about_us.team_members.0.role")}</p>
          </div>
          <div className="team-member">
            <img
              src="/img/team/ronald.jpg"
              alt={t("about_us.team_members.1.name")}
            />
            <h3>{t("about_us.team_members.1.name")}</h3>
            <p>{t("about_us.team_members.1.role")}</p>
          </div>
          <div className="team-member">
            <img
              src="/img/team/ronald.jpg"
              alt={t("about_us.team_members.2.name")}
            />
            <h3>{t("about_us.team_members.2.name")}</h3>
            <p>{t("about_us.team_members.2.role")}</p>
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="about-section call-to-action">
        <h2>{t("about_us.join_community-title")}</h2>
        <p>{t("about_us.join_community-description")}</p>
        <a href="/#/contact" className="cta-button">
          {t("about_us.join_community-button")}
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
