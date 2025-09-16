import React from "react";
import { Ready } from "../../Buttons/Ready/Ready.jsx";
import { SlideBar } from "../../Buttons/SlideBar/SlideBar.jsx";
import {
  useAppContext,
  setVolume,
  setBrightness,
  setLetterSize,
} from "../../../context/DirectoryProvider.jsx";
import "./style.css";

export const InGameConfig = ({ className = "", onClose }) => {
  const { dispatch, state } = useAppContext();

  return (
    <div className={`in-game-config ${className}`}>
      
      {/* Ready button positioned relative to the panel */}
    <Ready className="ready" onClick={onClose} />

    <h2>Game Settings</h2>

    <div className="config-row">
    <span>Volume: {Math.round(state.settings.volume * 100)}</span>
    <SlideBar
      value={state.settings.volume}
      onChange={(val) => setVolume(dispatch, val)}
    />
      </div>

      <div className="config-row">
        <span>Brightness: {Math.round(state.settings.brightness * 100)}</span>
        <SlideBar
          value={state.settings.brightness}
          onChange={(val) => setBrightness(dispatch, val)}
        />
      </div>

      <div className="config-row">
        <span>Letter Size: {Math.round(state.settings.letterSize * 100)}</span>
        <SlideBar
          value={state.settings.letterSize}
          onChange={(val) => setLetterSize(dispatch, val)}
        />
      </div>


    </div>
  );
};
