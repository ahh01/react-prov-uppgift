import React, { useContext } from "react";
import ColorContext from "./ColorContext";

function ColorDisplay() {
  const { color } = useContext(ColorContext);

  return (
    <div>
      <h2>Din favoritfärg är:</h2>
      <p>{color || "Ingen färg vald"}</p>
    </div>
  );
}

export default ColorDisplay;
