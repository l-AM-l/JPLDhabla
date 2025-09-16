// Gear.jsx
import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as GearVector } from "../../../assets/gear.svg";
import "./style.css";

export const Gear = ({ className = "", onClick }) => {
  return (
    <div className={`gear ${className}`} onClick={onClick}>
      <GearVector className="vector" />
    </div>
  );
};

Gear.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
