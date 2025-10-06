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
