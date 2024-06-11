// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

// 1. Kommentarslista 3p
// Hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

import React, { useState } from "react";

function CommentList() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div>
      <h2>Kommentarer</h2>
      <input
        type="text"
        value={newComment}
        onChange={handleInputChange}
        placeholder="Skriv en kommentar"
      />
      <button onClick={handleAddComment}>Lägg till</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment}
            <button onClick={() => handleDeleteComment(index)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
