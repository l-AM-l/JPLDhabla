import React, {useState} from "react";
import "./style.css";
import { LevelOverlay } from "../../Screens/LevelOverlay/LevelOverlay.jsx";
import { useAppContext } from "../../../context/DirectoryProvider.jsx";
import { Gear } from "../../Buttons/Gear/Gear.jsx";
import { InGameConfig } from "../../Screens/InGameConfig/InGameConfig.jsx";
import { Flechas } from "../../Frames/Flechas/Flechas.jsx";

// Import SVGs as React components
import { ReactComponent as JungleBackground } from "../../../assets/jungle_back.svg";
import { ReactComponent as StadiumBackground } from "../../../assets/stadium_back.svg";
import { ReactComponent as BeachBackground } from "../../../assets/beach_back.svg";

import { ReactComponent as JungleAnimal } from "../../../assets/lion.svg";
import { ReactComponent as StadiumAnimal } from "../../../assets/soccer.svg";
import { ReactComponent as BeachAnimal } from "../../../assets/dolphin.svg";

export const Level = () => {
  const { state } = useAppContext();
  const { level = 0, difficulty = 1, subLevel = 1 } = state;

  const [showConfig, setShowConfig] = useState(false);
  const handleGearClick = () => setShowConfig((p) => !p);

  // Phrases mapping
  const phrases = {
    0: [
      ["Ruge como un león", "Salta como un mono", "Camina como un elefante"],
      ["Ruge fuerte", "Salta rápido", "Camina pesado"],
      ["Ruge muy fuerte", "Salta muy alto", "Camina muy lento"],
    ],
    1: [
      ["Corre rápido", "Patea la pelota", "Salta la valla"],
      ["Corre más rápido", "Patea fuerte", "Salta más alto"],
      ["Corre sin parar", "Patea con fuerza", "Salta lo máximo"],
    ],
    2: [
      ["Nada como un pez", "Camina en la arena", "Construye un castillo"],
      ["Nada más lejos", "Camina más rápido", "Construye más grande"],
      ["Nada sin parar", "Corre en la arena", "Construye enorme"],
    ],
  };

  // Backgrounds mapping
  const backgrounds = {
    0: JungleBackground,
    1: StadiumBackground,
    2: BeachBackground,
  };

  // Animals mapping
  const animals = {
    0: JungleAnimal,
    1: StadiumAnimal,
    2: BeachAnimal,
  };

  const currentPhrase =
    phrases[level]?.[difficulty - 1]?.[subLevel - 1] || "Frase no disponible";

  const BackgroundSVG = backgrounds[level] || JungleBackground;
  const AnimalSVG = animals[level] || JungleAnimal;


  return (
    <div className="level-container">
      {/* Background full-screen */}
      <BackgroundSVG className="background-svg" />

      <Gear className="gear-instance" onClick={handleGearClick} />

      {/* Animal foreground */}
      <div className="level-animal">
        <AnimalSVG className="animal-svg" />
      </div>

      {/* Overlay right */}
      <div className="level-overlay">
        <LevelOverlay text={currentPhrase} />
      </div>

      <div className="back-button">
              <Flechas direction="left" to="/level_selector" />
        </div>

      {/* InGameConfig Panel */}
              <InGameConfig
                className={showConfig ? "open" : ""}
                onClose={() => setShowConfig(false)}
              />
    </div>
  );
};
