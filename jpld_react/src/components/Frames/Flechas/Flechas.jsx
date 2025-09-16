import React from "react";
import PropTypes from "prop-types";

// Import arrow SVGs as React components
import { ReactComponent as LeftArrow } from "../../../assets/left_arrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/right_arrow.svg";
import { ReactComponent as LeftArrow2 } from "../../../assets/left_arrow2.svg";   // thick
import { ReactComponent as RightArrow2 } from "../../../assets/right_arrow2.svg"; // thick
import "./style.css";

export const Flechas = ({
  direction = "right",
  size = "normal",
  className = "",
  showText = true,
  variant = "thin",
}) => {
  const isRight = direction === "right";
  const isThick = variant === "thick";

  const ArrowIcon = isRight
    ? isThick
      ? RightArrow2
      : RightArrow
    : isThick
    ? LeftArrow2
    : LeftArrow;

  return (
    <div className={`flechas ${size} ${className}`}>
      {isRight ? (
        <>
          <ArrowIcon className="arrow-icon" />
          <span className="Atext-wrapper">{showText ? "Siguiente" : ""}</span>
        </>
      ) : (
        <>
          <ArrowIcon className="arrow-icon" />
          <span className="Atext-wrapper">{showText ? "Atrás" : ""}</span>
        </>
      )}
    </div>
  );
};

Flechas.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
  size: PropTypes.oneOf(["small", "normal", "large"]),
  className: PropTypes.string,
  showText: PropTypes.bool,
  variant: PropTypes.oneOf(["thin", "thick"]),
};
