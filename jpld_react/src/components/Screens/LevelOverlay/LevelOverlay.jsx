import React from "react";
import "./style.css";
import { Iniciar } from "../../Buttons/Iniciar/Iniciar.jsx";

export const LevelOverlay = ({ text }) => {
  return (
    <div className="overlay-container">
      <p className="overlay-text">{text}</p>
      <div className="overlay-buttons">
        <Iniciar text="Opción 1" className="btn-overlay" />
        <Iniciar text="Opción 2" className="btn-overlay" />
        <Iniciar text="Opción 3" className="btn-overlay" />
      </div>
    </div>
  );
};
