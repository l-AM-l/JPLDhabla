import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flechas } from "../../Frames/Flechas/Flechas.jsx";
import { Person } from "../../Frames/Person/Person.jsx";
import { PlusMinus } from "../../Buttons/PlusMinus/PlusMinus.jsx";
import { Gear } from "../../Buttons/Gear/Gear.jsx";
import { InGameConfig } from "../../Screens/InGameConfig/InGameConfig.jsx"; // <-- import InGameConfig
import "./style.css";

import { useAppContext, setPlayers } from "../../../context/DirectoryProvider.jsx";

// Import assets
import IMG from "../../../assets/IMG_0850_1.png";
import img from "../../../assets/IMG_0849_1.png";

export const SelectorJugadores = () => {
  const { state, dispatch } = useAppContext();
  const playerCount = state.players;

  const [showConfig, setShowConfig] = useState(false); // <-- state for InGameConfig

  const handleIncrease = () => {
    if (playerCount < 5) {
      setPlayers(dispatch, playerCount + 1);
    }
  };

  const handleDecrease = () => {
    if (playerCount > 1) {
      setPlayers(dispatch, playerCount - 1);
    }
  };

  const handleGearClick = () => {
    setShowConfig((prev) => !prev);
  };

  return (
    <div className="selector-jugadores">
      <div className="overlap-group">
        <img className="background-img left" alt="Background left" src={IMG} />
        <img className="background-img right" alt="Background right" src={img} />

        <div className="controls-wrapper vertical">
          {/* Top row: gear */}
          <div className="top-row">
            <Gear className="gear-instance" onClick={handleGearClick} />
          </div>

          {/* PlusMinus + Person row */}
          <div className="controls-wrapper horizontal main-row">
            <PlusMinus
              type="minus"
              size="large"
              className="minus-btn"
              onClick={handleDecrease}
            />
            <Person count={playerCount} className="person-instance" />
            <PlusMinus
              type="plus"
              size="large"
              className="plus-btn"
              onClick={handleIncrease}
            />
          </div>

          {/* Header */}
          <div className="header">
            <div className="text-wrapper">Jugadores en la sala</div>
          </div>

          {/* Arrows */}
          <div className="controls-wrapper horizontal arrow-row">
            <Flechas className="flechas-2" direction="left" />
            <Flechas className="flechas-2" direction="right" />
          </div>
        </div>

        {/* InGameConfig Panel */}
        <InGameConfig
          className={showConfig ? "open" : ""}
          onClose={() => setShowConfig(false)}
        />
      </div>
    </div>
  );
};

SelectorJugadores.propTypes = {};
