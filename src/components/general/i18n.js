import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Cargar traducciones desde archivos
  .use(LanguageDetector) // Detectar idioma del navegador
  .use(initReactI18next) // Integración con React
  .init({
    supportedLngs: ["en", "es", "de", "ru"], // Idiomas soportados
    fallbackLng: "en", // Idioma por defecto
    debug: true, // Habilita logs en consola para desarrollo
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
    backend: {
      loadPath: "/languages/{{lng}}/translation.json", // Ruta de los archivos de traducción
    },
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
  });

export default i18n;
