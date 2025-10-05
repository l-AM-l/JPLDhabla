// src/Screens/LevelOverlay/LevelOverlay.jsx
import React, { useRef, useEffect } from "react";
import "./style.css";
import { IconButton } from "../../Buttons/IconButton/IconButton.jsx";
import { ReactComponent as Microphone } from "../../../assets/microphone.svg";
import { ReactComponent as Next } from "../../../assets/next.svg";
import { ReactComponent as Repeat } from "../../../assets/repeat.svg";

import { useAppContext, setScene } from "../../../context/DirectoryProvider.jsx";

// Audio files from public folder
const audioSources = [
  "/sounds/lion.mp3",
  "/sounds/soccer.mp3",
  "/sounds/beach.mp3",
];

export const LevelOverlay = ({ text }) => {
  const preloadedAudiosRef = useRef([]);
  const { state, dispatch } = useAppContext();

  // Preload audio files once
  useEffect(() => {
    preloadedAudiosRef.current = audioSources.map((src) => {
      const audio = new Audio(src);
      audio.load();
      audio.volume = 1;
      return audio;
    });
  }, []);

  // Play audio when Repeat button is clicked
  const handleRepeatClick = () => {
    const currentLevel = state.level; // grab current level from context
    const src = audioSources[currentLevel % audioSources.length];

    const audio = new Audio(src);
    audio.volume = 1;
    audio.currentTime = 0;

    audio
      .play()
      .then(() => console.log("Audio playing:", src))
      .catch((err) => console.error("Audio playback failed:", err));
  };

  // Move to next sublevel
  const handleNextClick = async () => {
    const nextScene = state.scene < 2? state.scene+1 : 0;

    try {
      await setScene(dispatch, nextScene);
      console.log(`Sublevel changed to: ${state.scene}`);
    } catch (error) {
      console.error("Failed to change sublevel:", error);
    }
  };

  return (
    <div className="overlay-container">
      <p className="overlay-text">{text}</p>
      <div className="overlay-buttons">
        <IconButton icon={Microphone} to="/game" className="btn-overlay" />
        <IconButton
          icon={Repeat}
          onClick={handleRepeatClick}
          className="btn-overlay"
        />
        <IconButton
          icon={Next}
          onClick={handleNextClick}
          className="btn-overlay"
        />
      </div>
    </div>
  );
};
