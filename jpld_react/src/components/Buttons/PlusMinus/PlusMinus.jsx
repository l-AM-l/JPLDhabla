import React, { useState } from "react";
import PropTypes from "prop-types";

// Import SVGs as React components
import { ReactComponent as PlusVector } from "../../../assets/plus.svg";
import { ReactComponent as MinusVector } from "../../../assets/minus.svg";

import "./style.css";

export const PlusMinus = ({
  type = "plus",
  size = "normal",
  className = "",
  onClick,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`plus-minus ${size} ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {type === "plus" ? (
        <PlusVector
          className="pm-icon"
          style={{ fill: hover ? "#e1567b" : "#03045e" }}
        />
      ) : (
        <MinusVector
          className="pm-icon"
          style={{ fill: hover ? "#e1567b" : "#03045e" }}
        />
      )}
    </div>
  );
};

PlusMinus.propTypes = {
  type: PropTypes.oneOf(["plus", "minus"]),
  size: PropTypes.oneOf(["small", "normal", "large"]),
  className: PropTypes.string,
  onClick: PropTypes.func, // ✅ add prop validation
};
