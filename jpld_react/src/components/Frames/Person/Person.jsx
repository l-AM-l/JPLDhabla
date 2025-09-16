import React from "react";
import PropTypes from "prop-types";
// Import SVG as React component
import { ReactComponent as PlayerIcon } from "../../../assets/people-svgrepo-com.svg";
import "./style.css";

export const Person = ({ count = 1, className = "" }) => {
  return (
    <div className={`person ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="player-wrapper">
          <PlayerIcon className="player-icon" title={`Jugador ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

Person.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string,
};
