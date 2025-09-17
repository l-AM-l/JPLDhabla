import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const IconButton = ({
  className = "",
  icon: Icon = null,  // SVG component
  to = null,          // optional route
  onClick = null,     // optional callback
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to); // navigate if "to" is provided
    }
    if (onClick) {
      onClick(); // call callback if provided
    }
  };

  return (
    <div
      className={`iniciar ${className}`}
      onClick={handleClick}
      style={{ cursor: to || onClick ? "pointer" : "default" }}
    >
      <div className="icon-wrapper">
        {Icon && <Icon className="icon-svg" />}
      </div>
    </div>
  );
};

IconButton.propTypes = {
  icon: PropTypes.elementType,  // expects a React component (SVG)
  className: PropTypes.string,
  to: PropTypes.string,         // optional route
  onClick: PropTypes.func,      // optional callback
};
