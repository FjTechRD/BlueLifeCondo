import React from "react";
import "../css/pages/Home.css";

const Home = () => {
  return (
    <main className="home-container">
      {/* Video de fondo */}
      <video className="background-video" autoPlay loop muted>
        <source src="/public/bg-bluelife-video.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Capa de degradado */}
      <div className="gradient-overlay"></div>

      {/* Contenido centrado */}
      <div className="content-overlay">
        <img src="/BLLogo.png" alt="Logo Blue Life" className="logo" />
      </div>
    </main>
  );
};

export default Home;
