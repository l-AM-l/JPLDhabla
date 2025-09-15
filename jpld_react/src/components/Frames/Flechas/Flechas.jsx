import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import image from "./image.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";

export const Flechas = ({ size, className, vector = "vector-3.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "next",
  });

  return (
    <div
      className={`flechas ${state.size} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {["back", "next"].includes(state.size) && (
        <div className="group">
          <img
            className="vector"
            alt="Vector"
            src={state.size === "back" ? image : vector}
          />
        </div>
      )}

      {["siguiente-color", "siguiente"].includes(state.size) && (
        <>
          <div className="text-wrapper">Siguiente</div>

          <img
            className="img"
            alt="Vector"
            src={state.size === "siguiente-color" ? vector4 : vector2}
          />
        </>
      )}

      {["atras-color", "atras"].includes(state.size) && (
        <>
          <img
            className="vector-2"
            alt="Vector"
            src={state.size === "atras-color" ? vector5 : vector}
          />

          <div className="div">Atrás</div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.size === "siguiente") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "siguiente-color",
        };
    }
  }

  if (state.size === "siguiente-color") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "siguiente",
        };
    }
  }

  if (state.size === "atras") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "atras-color",
        };
    }
  }

  if (state.size === "atras-color") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "atras",
        };
    }
  }

  return state;
}

Flechas.propTypes = {
  size: PropTypes.oneOf([
    "atras-color",
    "back",
    "siguiente",
    "next",
    "atras",
    "siguiente-color",
  ]),
  vector: PropTypes.string,
};