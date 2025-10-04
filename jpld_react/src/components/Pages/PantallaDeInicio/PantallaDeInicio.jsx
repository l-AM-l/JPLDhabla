
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Iniciar } from "../../Buttons/Iniciar/Iniciar.jsx";
import { Salir } from "../../Buttons/Salir/Salir.jsx";
import { Gear } from "../../Buttons/Gear/Gear.jsx";
import { InGameConfig } from "../../Screens/InGameConfig/InGameConfig.jsx";
import "./style.css";

// Import images from assets
import IMG from "../../../assets/IMG_0841_1.png";
import img from "../../../assets/IMG_0841_2.png";
import IMG1 from "../../../assets/IMG_0846_1.png";

export const PantallaDeInicio = () => {

  const [showConfig, setShowConfig] = useState(false);

  const handleGearClick = () => setShowConfig(prev => !prev);

  return (
    <div className="pantalla-de-inicio">
      <div className="overlap-group">
        {/* Gear directly inside overlap-group for absolute positioning */}
        <Gear className="gear-instance" onClick={handleGearClick} />


        <img className="IMG" alt="Img" src={IMG} />
        <img className="img" alt="Img" src={img} />
        
        <div className="iniciar-with-img">
          <img className="IMG-2" alt="Img" src={IMG1} />
          <Iniciar className="iniciar-instance" text="Iniciar" to="/selector_jugadores"/>
          <Iniciar className="salir-instance" text="Salir" to="/"/>
        </div>


        <InGameConfig className={showConfig ? "open" : ""} onClose={() => setShowConfig(false)} />
  
      </div>
    </div>
  );
};