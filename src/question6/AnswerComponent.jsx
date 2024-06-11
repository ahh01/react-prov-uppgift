// AnswerComponent.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "./store";

function AnswerComponent() {
  const [answerText, setAnswerText] = useState("");
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question.question);
  const answer = useSelector((state) => state.question.answer);

  const handleSubmit = () => {
    dispatch(setAnswer(answerText));
    setAnswerText("");
  };

  return (
    <div>
      <h3>Fråga: {question}</h3>
      <input
        type="text"
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
      />
      <button onClick={handleSubmit}>Svara på frågan</button>
      <p>Svar: {answer}</p>
    </div>
  );
}

export default AnswerComponent;
