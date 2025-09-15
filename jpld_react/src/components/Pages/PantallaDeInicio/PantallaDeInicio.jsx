import React from "react";
import PropTypes from "prop-types";
import { Iniciar } from "../../Buttons/Iniciar/Iniciar.jsx";
import { Salir } from "../../Buttons/Salir/Salir.jsx";
import "./style.css";

// Import images from assets
import IMG from "../../../assets/IMG_0841_1.png";
import img from "../../../assets/IMG_0841_2.png";
import IMG1 from "../../../assets/IMG_0846_1.png";
import vector from "../../../assets/gear.png";

export const PantallaDeInicio = () => {
  return (
    <div className="pantalla-de-inicio">
      <div className="overlap-group">
        <img className="IMG" alt="Img" src={IMG} />
        <img className="img" alt="Img" src={img} />
        <Salir className="salir-instance" />
        <Iniciar className="iniciar-instance" />
        <img className="IMG-2" alt="Img" src={IMG1} />
      </div>

      <div className="gear">
        <img className="vector" alt="Vector" src={vector} />
      </div>
    </div>
  );
};
