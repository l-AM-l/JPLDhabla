// src/frames/CarruselFunc/CarruselFunc.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flechas } from "../../Frames/Flechas/Flechas.jsx";
import "./style.css";

export const CarruselFunc = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  const Item = items[currentIndex]; // NOTE: capitalized var -> React component or string path

  return (
    <div className="carrusel-container">
      <div className="carousel-arrow left-arrow" onClick={handlePrev}>
        <Flechas direction="left" showText={false} variant="thick" />
      </div>

      <div className="carousel-frame">
        {/* If the item is a string, render <img>. If it's a component/function, render it as <Item /> */}
        {typeof Item === "string" ? (
          <img
            src={Item}
            alt={`Level ${currentIndex + 1}`}
            className="carousel-image"
          />
        ) : (
          // Item is a React component (imported as ReactComponent)
          <Item className="carousel-image" />
        )}
      </div>

      <div className="carousel-arrow right-arrow" onClick={handleNext}>
        <Flechas direction="right" showText={false} variant="thick" />
      </div>
    </div>
  );
};

CarruselFunc.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.elementType])
  ),
};
