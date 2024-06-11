// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("example@example.com");
  const [isEditing, setIsEditing] = useState(false);
  const [newEmail, setNewEmail] = useState(email);

  const handleInputChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handleEditSaveClick = () => {
    if (isEditing) {
      setEmail(newEmail);
    }

    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <input type="email" value={newEmail} onChange={handleInputChange} />
      ) : (
        <span>{email}</span>
      )}
      <button onClick={handleEditSaveClick}>
        {isEditing ? "Spara" : "Redigera"}
      </button>
    </div>
  );
}

export default App;
