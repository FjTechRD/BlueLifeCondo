import React, { useState, useEffect } from "react";
import "../css/components/ComingSoon.css";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); // Sumar 2 días
    targetDate.setHours(targetDate.getHours() + 12); // Sumar 12 horas
    targetDate.setMinutes(targetDate.getMinutes() + 30); // Sumar 30 minutos

    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null; // Cuando el tiempo se agote
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer); // Limpiar intervalo al desmontar
  }, []);

  if (!timeLeft) {
    return (
      <div className="coming-soon">
        <h1>¡La cuenta atrás ha terminado!</h1>
      </div>
    );
  }

  return (
    <div className="coming-soon">
      {/* Logo de la empresa */}
      <div className="logo-container">
        <img
          src="/BLLogo.png"
          alt="BlueLife Logo"
          className="logo-coming-soon"
        />
      </div>

      {/* Cuenta regresiva */}
      <h1>¡Estamos trabajando en nuestra página web!</h1>
      <div className="countdown">
        <div>
          <span>{timeLeft.days}</span>
          <small>Días</small>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <small>Horas</small>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <small>Minutos</small>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <small>Segundos</small>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
