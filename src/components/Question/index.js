import { forwardRef } from "react";
import "./style.css";

const Question = forwardRef(({ question, questionIndex }, ref) => {
  return (
    question ? <p className="question"ref={ref} > <span className="question_marker">{questionIndex}.</span>{question}</p> : null
  );
})

export default Question;
