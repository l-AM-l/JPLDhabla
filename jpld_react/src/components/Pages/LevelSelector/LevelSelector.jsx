// src/pages/LevelSelector/LevelSelector.jsx
import React, { useState } from "react";
import { CarruselFunc } from "../../Frames/CarruselFunc/CarruselFunc.jsx";
import { Flechas } from "../../Frames/Flechas/Flechas.jsx";
import { Gear } from "../../Buttons/Gear/Gear.jsx";
import { InGameConfig } from "../../Screens/InGameConfig/InGameConfig.jsx";
import { LevelInfo } from "../../Screens/LevelInfo/LevelInfo.jsx";

import "./style.css";

// SVG imports
import { ReactComponent as Stadium } from "../../../assets/stadium.svg";
import { ReactComponent as Beach } from "../../../assets/beach.svg";
import { ReactComponent as Forest } from "../../../assets/forest.svg";
import { ReactComponent as OrangeIcon } from "../../../assets/cloud.svg";

export const LevelSelector = () => {
  const [showConfig, setShowConfig] = useState(false);
  const [showLevelInfo, setShowLevelInfo] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);

  const handleGearClick = () => setShowConfig((p) => !p);

  const levelImages = [Stadium, Beach, Forest];

  return (
    <div className="level-selector">
      <div className="header">
        <h1 className="title">Seleccione un Escenario</h1>
        <Gear className="gear-instance" onClick={handleGearClick} />
      </div>

      <CarruselFunc
        items={levelImages}
        onSelectLevel={(level) => {
          setCurrentLevel(level);
          setShowLevelInfo(true); // show LevelInfo when clicked
        }}
      />

      {/* Show LevelInfo only when triggered */}
      <LevelInfo
        level={currentLevel}
        visible={showLevelInfo}
        onCancel={() => setShowLevelInfo(false)} // hide LevelInfo on Cancel
      />

      <div className="back-button">
        <Flechas direction="left" to="/selector_jugadores" />
      </div>

      <InGameConfig
        className={showConfig ? "open" : ""}
        onClose={() => setShowConfig(false)}
      />

      <OrangeIcon className="orange-icon2" />
      <OrangeIcon className="orange-icon" />
    </div>
  );
};

export default LevelSelector;
