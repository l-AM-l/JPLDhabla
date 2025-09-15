import PropTypes from "prop-types";
import React from "react";
import { Flechas } from "./Flechas";
import { Person } from "./Person";
import "./style.css";

export const SelectorJugadores = ({
  IMG = "IMG-0850-1.png",
  img = "IMG-0849-1.png",
  personUnion = "union-2.svg",
  personVector = "vector-9.svg",
  personImg = "vector-10.svg",
  flechasVector = "vector-7.svg",
  flechasImg = "vector-8.svg",
  vector = "vector-5.svg",
}) => {
  return (
    <div className="selector-jugadores">
      <div className="overlap-group">
        <img className="IMG" alt="Img" src={IMG} />

        <img className="IMG-2" alt="Img" src={img} />

        <div className="frame">
          <div className="text-wrapper-2">Jugadores en la sala</div>
        </div>

        <Person
          className="person-instance"
          img={personImg}
          property1="default"
          union={personUnion}
          vector={personVector}
          vectorClassName="design-component-instance-node"
        />
        <div className="flechas-wrapper">
          <Flechas
            className="flechas-instance"
            size="siguiente"
            vector={flechasVector}
          />
        </div>

        <Flechas className="flechas-2" img={flechasImg} size="atras" />
      </div>

      <div className="gear">
        <img className="vector-4" alt="Vector" src={vector} />
      </div>
    </div>
  );
};

SelectorJugadores.propTypes = {
  IMG: PropTypes.string,
  img: PropTypes.string,
  personUnion: PropTypes.string,
  personVector: PropTypes.string,
  personImg: PropTypes.string,
  flechasVector: PropTypes.string,
  flechasImg: PropTypes.string,
  vector: PropTypes.string,
};