import React from "react";

import "../../css/pages/Home.css";

function VideoBackground() {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/bg-bluelife-video.mp4" type="video/mp4" />
      </video>
      <div className="gradient-overlay"></div>
      <div className="logo-overlay">
        <img src="/BLLogo.png" alt="Logo" className="logo-video-background" />
      </div>
    </div>
  );
}

export default VideoBackground;
