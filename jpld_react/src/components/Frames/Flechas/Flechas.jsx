import React, { useState } from "react";
import PropTypes from "prop-types";

// Import arrow SVGs as React components
import { ReactComponent as LeftArrow } from "../../../assets/left_arrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/right_arrow.svg";
import "./style.css";

export const Flechas = ({ direction = "right", size = "normal", className = "" }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`flechas ${size} ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {direction === "right" ? (
        <RightArrow
          className="arrow-icon"
          style={{ fill: hover ? "#e1567b" : "#03045e" }}
        />
      ) : (
        <LeftArrow
          className="arrow-icon"
          style={{ fill: hover ? "#e1567b" : "#03045e" }}
        />
      )}
    </div>
  );
};

Flechas.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
  size: PropTypes.oneOf(["small", "normal", "large"]),
  className: PropTypes.string,
};
