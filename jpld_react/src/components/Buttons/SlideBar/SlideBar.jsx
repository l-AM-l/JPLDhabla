import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const SlideBar = ({ value, onChange, min = 0, max = 1, step = 0.01 }) => {
  return (
    <input
      type="range"
      className="slidebar"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
    />
  );
};

SlideBar.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};
