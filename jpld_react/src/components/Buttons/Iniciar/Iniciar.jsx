import React from "react";
import "./style.css";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Iniciar = ({ className, text=null, to=null}) => {

  const navigate = useNavigate();

  const handleClick = () =>{
    if(to){
      navigate(to);
    }
    
  }

  return (
    <div className={`iniciar ${className}`} onClick={handleClick}>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

Iniciar.propTypes = {
  text: PropTypes.string, 
  to: PropTypes.string,
};
