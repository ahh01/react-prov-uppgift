import React, { useContext } from "react";
import ColorContext from "./ColorContext";

function ColorSelector() {
  const { setColor } = useContext(ColorContext);

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Välj en färg</option>
        <option value="röd">Röd</option>
        <option value="grön">Grön</option>
        <option value="blå">Blå</option>
        <option value="gul">Gul</option>
        <option value="lila">Lila</option>
      </select>
    </div>
  );
}

export default ColorSelector;
