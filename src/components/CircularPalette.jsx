
import React, { useState } from "react";

const colors = ["#0D1B2A", "#1B3A34", "#2E1A47", "#3B1E22", "#1B2F32"];

export default function CircularPalette(props) {
  const [bgColor, setBgColor] = useState("#1E1E1E"); // Default background color

  const handleClick = (color) => {
    setBgColor(color);
    // props.bgColor(color); // Set background color
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: "50% ", display: "flex", justifyContent: "center", alignItems: "center", transition: "background-color 0.5s" }}>
      <svg width="50" height="50" viewBox="0 0 200 200">
        {colors.map((color, index) => {
          const angle = (index / colors.length) * (2 * Math.PI);
          const x = 100 + 60 * Math.cos(angle);
          const y = 100 + 60 * Math.sin(angle);

          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="20"
              fill={color}
              onClick={() => props.bgColor(color)}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </svg>
    </div>
  );
}
