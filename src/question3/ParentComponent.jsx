import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  // State för att hålla den valda färgen
  const [favoriteColor, setFavoriteColor] = useState("");

  // Callback-funktion för att uppdatera den valda färgen
  const handleColorChange = (color) => {
    setFavoriteColor(color);
  };

  return (
    <div>
      <h2>Välj din favoritfärg</h2>
      <ChildComponent onColorChange={handleColorChange} />
      {favoriteColor && (
        <p>
          Din favoritfärg är:{" "}
          <span style={{ color: favoriteColor }}>{favoriteColor}</span>
        </p>
      )}
    </div>
  );
}

export default ParentComponent;
