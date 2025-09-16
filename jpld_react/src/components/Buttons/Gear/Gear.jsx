import React from "react";
import "./style.css";
import { ReactComponent as GearVector } from "../../../assets/gear.svg";

export const Gear = ({ className = "" }) => {
  return (
    <div className={`gear ${className}`}>
      <GearVector className="vector" />
    </div>
  );
};
