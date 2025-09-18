import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const IconButton = ({ className = "", icon: Icon = null, to = null, onClick = null }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();

    // First trigger callback
    if (onClick) {
      onClick();
    }

    // Then navigate if `to` is defined
    if (to) {
      navigate(to);
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
  icon: PropTypes.elementType,
  className: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};
