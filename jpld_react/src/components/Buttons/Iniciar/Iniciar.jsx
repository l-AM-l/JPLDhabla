import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Iniciar = ({
  className = "",
  text = null,
  to = null,       // optional route
  onClick = null,  // optional callback
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
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

Iniciar.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,       // optional route
  onClick: PropTypes.func,    // optional callback
};
