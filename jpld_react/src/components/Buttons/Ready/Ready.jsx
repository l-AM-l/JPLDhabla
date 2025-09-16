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
