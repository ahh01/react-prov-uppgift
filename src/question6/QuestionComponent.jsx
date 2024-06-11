// QuestionComponent.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestion } from "./store";

function QuestionComponent() {
  const [questionText, setQuestionText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setQuestion(questionText));
    setQuestionText("");
  };

  return (
    <div>
      <input
        type="text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <button onClick={handleSubmit}>Ställ frågan</button>
    </div>
  );
}

export default QuestionComponent;
