import React from "react";
import PropTypes from "prop-types";

// Import arrow SVGs as React components
import { ReactComponent as LeftArrow } from "../../../assets/left_arrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/right_arrow.svg";
import "./style.css";

export const Flechas = ({ direction = "right", size = "normal", className = "" }) => {
  return (
    <div className={`flechas ${size} ${className}`}>
      {direction === "right" ? (
        <>
          <RightArrow className="arrow-icon" />
          <span className="Atext-wrapper">Siguiente</span>
        </>
      ) : (
        <>
          <LeftArrow className="arrow-icon" />
          <span className="Atext-wrapper">Atrás</span>
        </>
      )}
    </div>
  );
};

Flechas.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
  size: PropTypes.oneOf(["small", "normal", "large"]),
  className: PropTypes.string,
};
