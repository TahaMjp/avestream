import React from "react";
import { Link } from "react-router-dom";

// Generate small random rotation & position for filler texts
const generateRandomStyle = (index) => {
  const rotations = [-12, -8, -4, 2, 4, 8, 12];
  const tops = ["5%", "42%", "58%", "64%", "70%", "89%"];
  const lefts = ["5%", "15%", "35%", "55%", "70%", "80%"];

  return {
    top: tops[index % tops.length],
    left: lefts[index % lefts.length],
    transform: `rotate(${
      rotations[Math.floor(Math.random() * rotations.length)]
    }deg)`,
  };
};

const Slide = ({ bg, route, title, text, link = false, fillers = [] }) => {
  return (
    <section
      data-route={route}
      className="relative h-screen w-full snap-start bg-cover bg-center overflow-hidden font-[eraser] flex justify-center items-start text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Main Title */}
      <div className="relative z-10 mt-20 text-center px-4">
        {link ? (
          <Link
            to={route}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-widest block transform rotate-[-4deg] hover:opacity-80 transition-opacity"
          >
            {title}
          </Link>
        ) : (
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-widest transform rotate-[-5deg]">
            {title}
          </h1>
        )}
      </div>

      {/* Filler Texts */}
      {fillers.map((f, i) => (
        <span
          key={i}
          className="absolute text-xs sm:text-sm md:text-base opacity-70 max-w-[150px] sm:max-w-[200px] leading-tight"
          style={generateRandomStyle(i)}
        >
          {f}
        </span>
      ))}
    </section>
  );
};

export default Slide;
