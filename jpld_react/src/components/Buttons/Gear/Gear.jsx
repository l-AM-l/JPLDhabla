import React from "react";
import "./style.css";
import vector from "../../../assets/gear.png";

export const Gear = () => {
  return (
    <div className="gear">
      <img className="vector" alt="Vector" src={vector} />
    </div>
  );
};