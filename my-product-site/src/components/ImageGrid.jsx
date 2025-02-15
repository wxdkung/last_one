// src/components/Slider.jsx
import React, { useState } from "react";

const sliderImages = [
  "./img/1.png", // เปลี่ยนเป็น URL รูปจริงของคุณ
  "./img/2.png",
  "./img/3.png",
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {sliderImages.map((img, index) => (
        <div key={index} className={`absolute w-full h-full transition-opacity duration-500 ${index === current ? "opacity-100" : "opacity-0"}`}>
          <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gold text-dark px-2 py-1">Prev</button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gold text-dark px-2 py-1">Next</button>
    </div>
  );
};

export default Slider;
