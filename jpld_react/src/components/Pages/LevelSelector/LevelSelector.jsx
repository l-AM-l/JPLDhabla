// src/pages/LevelSelector/LevelSelector.jsx
import React, { useState } from "react";
import { CarruselFunc } from "../../Frames/CarruselFunc/CarruselFunc.jsx";
import { Flechas } from "../../Frames/Flechas/Flechas.jsx";
import { Gear } from "../../Buttons/Gear/Gear.jsx";
import { InGameConfig } from "../../Screens/InGameConfig/InGameConfig.jsx";

import "./style.css";

// IMPORTANT: import your SVGs as React components (SVGR)
import { ReactComponent as Stadium } from "../../../assets/stadium.svg";
import { ReactComponent as Beach } from "../../../assets/beach.svg";
import { ReactComponent as Forest } from "../../../assets/forest.svg";
import { ReactComponent as OrangeIcon } from "../../../assets/cloud.svg";

export const LevelSelector = () => {
  const [showConfig, setShowConfig] = useState(false);
  const handleGearClick = () => setShowConfig((p) => !p);

  // Pass components (not strings) to CarruselFunc
  const levelImages = [Stadium, Beach, Forest];

  return (
    <div className="level-selector">
      <div className="header">
        <h1 className="title">Seleccione un Escenario</h1>
        <Gear className="gear-instance" onClick={handleGearClick} />
      </div>

      <CarruselFunc items={levelImages} />

      <div className="back-button">
        <Flechas direction="left" />
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
