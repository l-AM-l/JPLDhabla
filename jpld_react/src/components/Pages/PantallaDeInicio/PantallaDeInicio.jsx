import PropTypes from "prop-types";
import React from "react";
import {Iniciar} from '../../Buttons/Iniciar/Iniciar.jsx';
import {Salir} from '../../Buttons/Salir/Salir.jsx';
import "./style.css";

export const PantallaDeInicio = ({
  IMG = "IMG-0841-1.png",
  img = "IMG-0841-2.png",
  IMG1 = "IMG-0846-1.png",
  vector = "vector.svg",
}) => {
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

PantallaDeInicio.propTypes = {
  IMG: PropTypes.string,
  img: PropTypes.string,
  IMG1: PropTypes.string,
  vector: PropTypes.string,
};
