import React from "react";
import { useTranslation } from "react-i18next";
import "../../css/pages/Home.css";

function CallToAction() {
  const { t } = useTranslation();
  return (
    <section className="calltoaction-section">
      <div className="calltoaction-content">
        <h2 className="calltoaction-title">{t("home.cta")}</h2>
        <p className="calltoaction-description">{t("home.cta-description")}</p>
        <a href="#contact" className="calltoaction-button">
          {t("home.cta-button")}
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
