import PropTypes from "prop-types";
import React from "react";
import image from "./image.svg";
import "./style.css";
import union3 from "./union-3.svg";
import union4 from "./union-4.svg";
import union5 from "./union-5.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";
import vector9 from "./vector-9.svg";
import vector10 from "./vector-10.svg";
import vector11 from "./vector-11.svg";
import vector12 from "./vector-12.svg";
import vector13 from "./vector-13.svg";
import vector14 from "./vector-14.svg";
import vector15 from "./vector-15.svg";
import vector17 from "./vector-17.svg";
import vector18 from "./vector-18.svg";
import vector19 from "./vector-19.svg";

export const Person = ({
  property1,
  className,
  union = "union-2.svg",
  vectorClassName,
  vector = "vector.svg",
  img = "vector-16.svg",
}) => {
  return (
    <div className={`person ${property1} ${className}`}>
      <img
        className="img"
        alt="Union"
        src={
          property1 === "variant-3"
            ? union4
            : property1 === "variant-4"
              ? union5
              : property1 === "variant-5"
                ? union
                : property1 === "default"
                  ? union
                  : union3
        }
      />

      {property1 === "default" && (
        <img
          className={`vector ${vectorClassName}`}
          alt="Vector"
          src={vector}
        />
      )}

      {["variant-2", "variant-3", "variant-4", "variant-5"].includes(
        property1,
      ) && (
        <div className={`group ${vectorClassName}`}>
          <img
            className="vector-2"
            alt="Vector"
            src={
              property1 === "variant-4"
                ? vector6
                : property1 === "variant-5"
                  ? vector10
                  : property1 === "variant-2"
                    ? image
                    : vector3
            }
          />

          <img
            className="vector-3"
            alt="Vector"
            src={
              property1 === "variant-5"
                ? vector14
                : property1 === "variant-3"
                  ? vector5
                  : property1 === "variant-4"
                    ? vector9
                    : vector2
            }
          />

          {["variant-3", "variant-4", "variant-5"].includes(property1) && (
            <img
              className="vector-4"
              alt="Vector"
              src={
                property1 === "variant-3"
                  ? vector4
                  : property1 === "variant-4"
                    ? vector7
                    : vector11
              }
            />
          )}

          {["variant-4", "variant-5"].includes(property1) && (
            <img
              className="vector-5"
              alt="Vector"
              src={property1 === "variant-5" ? vector12 : vector8}
            />
          )}

          {property1 === "variant-5" && (
            <img className="vector-6" alt="Vector" src={vector13} />
          )}
        </div>
      )}

      <img
        className="img"
        alt="Vector"
        src={
          property1 === "variant-2"
            ? vector17
            : property1 === "variant-3"
              ? vector18
              : property1 === "variant-4"
                ? vector19
                : property1 === "variant-5"
                  ? vector15
                  : img
        }
      />
    </div>
  );
};

Person.propTypes = {
  property1: PropTypes.oneOf([
    "default",
    "variant-5",
    "variant-2",
    "variant-3",
    "variant-4",
  ]),
  union: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
};