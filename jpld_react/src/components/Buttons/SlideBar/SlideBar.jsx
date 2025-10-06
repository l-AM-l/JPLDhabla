/*
 * © 2025 [Rodrigo López Gómez, Ramón Alejandro Briseño Martínez, Nahui Metztli Dado Delgadillo, Ana Mariem Pérez Chacón, Karla Avila Navarro, Ana María Guzman Solís]
 * Licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
 * 
 * You must give appropriate credit to all contributors whenever you use or modify this file.
 * Commercial use or redistribution without permission is prohibited.
 * 
 * Full license text: https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
 */
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
