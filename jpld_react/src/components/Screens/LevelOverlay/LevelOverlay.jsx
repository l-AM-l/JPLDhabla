import React from "react";
import "./style.css";

export const LevelOverlay = ({ text }) => {
  return (
    <div className="overlay-container">
      <p className="overlay-text">{text}</p>
    </div>
  );
};
