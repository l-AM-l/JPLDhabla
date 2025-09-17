import React from "react";
import "./style.css";
import { IconButton } from "../../Buttons/IconButton/IconButton.jsx";
import { ReactComponent as Microphone } from "../../../assets/microphone.svg";
import { ReactComponent as Next } from "../../../assets/next.svg";
import { ReactComponent as Repeat } from "../../../assets/repeat.svg";

export const LevelOverlay = ({ text }) => {
  return (
    <div className="overlay-container">
      <p className="overlay-text">{text}</p>
      <div className="overlay-buttons">
        <IconButton icon={Microphone} to="/game" className="btn-overlay" />
        <IconButton icon={Repeat} to="/game" className="btn-overlay" />
        <IconButton icon={Next} to="/game" className="btn-overlay" />
      </div>
    </div>
  );
};
