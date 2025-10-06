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
import { ReactComponent as ReadyVector } from "../../../assets/ready.svg";
import "./style.css";

export const Ready = ({ className = "", onClick }) => {
  return (
    <div className={`ready ${className}`} onClick={onClick}>
      <ReadyVector className="ready-icon" />
    </div>
  );
};

Ready.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
