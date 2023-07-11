import React, { useState} from "react";
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// pass the props
const Question = ({title, description, key}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const show = () => {
    setShowAnswer(!showAnswer);
  };
  return (
      <div className="container question">
      <div className="question-title">
        <h1>{title}</h1>
        <button className="question-icon" onClick={show}>
          {showAnswer ? <AiOutlineMinus color="red" /> : <AiOutlinePlus color="#1f93ff" />}
        </button>
      </div>
      <div className="question-answer">
        {showAnswer && (
          <p className="u-text-small">
            {description}
          </p>
        )}
      </div>
    </div>
    
  )
};

export default Question;
