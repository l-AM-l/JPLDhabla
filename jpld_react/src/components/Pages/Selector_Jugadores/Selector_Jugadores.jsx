import React from "react";
import PropTypes from "prop-types";
import { Flechas } from "../../Frames/Flechas/Flechas.jsx";
import { Person } from "../../Frames/Person/Person.jsx";
import { PlusMinus } from "../../Buttons/PlusMinus/PlusMinus.jsx";
import { Gear } from "../../Buttons/Gear/Gear.jsx";
import "./style.css";

// Import assets as React components or images
import IMG from "../../../assets/IMG_0850_1.png";
import img from "../../../assets/IMG_0849_1.png";

export const SelectorJugadores = () => {
  return (
    <div className="selector-jugadores">
      <div className="overlap-group">
        <img className="background-img left" alt="Background left" src={IMG} />
        <img className="background-img right" alt="Background right" src={img} />
        
        <div className="controls-wrapper vertical">
          <div>
            <Gear className="gear-instance" />
          </div>
          
          <div className="controls-wrapper horizontal">
            <PlusMinus type="minus" size="normal" className="minus-btn" />
            <Person count={1} className="person-instance" />
            <PlusMinus type="plus" size="normal" className="plus-btn" />
          </div>

          <div className="header">
            <div className="text-wrapper">Jugadores en la sala</div>
          </div>

          <div className="controls-wrapper horizontal">
            <Flechas className="flechas-2" direction="left" />
            <Flechas className="flechas-2" direction="right" />
          </div>
        </div>
      </div>

     
    </div>
  );
};

SelectorJugadores.propTypes = {};
