import React, { useState } from "react";
import "./Slider.css";

const images = [
  "./img/1.png",
  "./img/2.png",
  "./img/3.png"
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={prevSlide}>❮</button>
      <div className="slider-wrapper">
        <img src={images[currentIndex]} alt="Slide" className="slider-image" />
      </div>
      <button className="slider-button right" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;
