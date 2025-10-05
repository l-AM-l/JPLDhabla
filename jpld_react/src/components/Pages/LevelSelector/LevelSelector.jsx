// src/pages/LevelSelector/LevelSelector.jsx
import React, { useState } from "react";
import { CarruselFunc } from "../../Frames/CarruselFunc/CarruselFunc.jsx";
import { Flechas } from "../../Frames/Flechas/Flechas.jsx";
import { Gear } from "../../Buttons/Gear/Gear.jsx";
import { InGameConfig } from "../../Screens/InGameConfig/InGameConfig.jsx";
import { LevelInfo } from "../../Screens/LevelInfo/LevelInfo.jsx";

import "./style.css";

// SVG imports (ejemplo, agrega todos los que falten)
import { ReactComponent as Stadium } from "../../../assets/stadium.svg";
import { ReactComponent as Beach } from "../../../assets/beach.svg";
import { ReactComponent as Forest } from "../../../assets/forest.svg";
import { ReactComponent as House } from "../../../assets/house.svg";
import { ReactComponent as Hygiene } from "../../../assets/hygiene.svg";
import { ReactComponent as Transport } from "../../../assets/transport.svg";
import { ReactComponent as Playground } from "../../../assets/park.svg";

import { ReactComponent as OrangeIcon } from "../../../assets/cloud.svg";

export const LevelSelector = () => {
  const [showConfig, setShowConfig] = useState(false);
  const [showLevelInfo, setShowLevelInfo] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);

  const handleGearClick = () => setShowConfig((p) => !p);

  // Todas las imágenes de niveles (0 a 6)
  const levelImages = [
    Forest,     // 0 - Selva
    Stadium,    // 1 - Escuela / Estadio
    Beach,      // 2 - Playa
    House,      // 3 - Casa
    Hygiene,    // 4 - Cuerpo / Higiene
    Transport,  // 5 - Transporte
    Playground  // 6 - Juego / Parque
  ];

  return (
    <div className="level-selector">
      <div className="header">
        <h1 className="title">SE-LEC-CIO-NE UN ES-CE-NA-RIO</h1>
        <Gear className="gear-instance" onClick={handleGearClick} />
      </div>

      <CarruselFunc
        items={levelImages}
        onSelectLevel={(levelIndex) => {
          setCurrentLevel(levelIndex);
          setShowLevelInfo(true); // mostrar ventana de LevelInfo
        }}
      />

      {/* Mostrar LevelInfo solo si fue activado */}
      {showLevelInfo && (
        <LevelInfo
          level={currentLevel}
          visible={showLevelInfo}
          onCancel={() => setShowLevelInfo(false)} // oculta al cancelar
        />
      )}

      <div className="back-button">
        <Flechas direction="left" to="/selector_jugadores" />
      </div>

      <InGameConfig
        className={showConfig ? "open" : ""}
        onClose={() => setShowConfig(false)}
      />

      {/* Decoración */}
      <OrangeIcon className="orange-icon2" />
      <OrangeIcon className="orange-icon" />
    </div>
  );
};

export default LevelSelector;
