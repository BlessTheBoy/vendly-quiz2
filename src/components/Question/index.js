import { forwardRef, useEffect, useRef } from "react";
import "./style.css";

const Question = forwardRef(({ question, questionIndex }, ref) => {
  const questionRef = useRef(null)

  useEffect(() => {
    document.documentElement.style.setProperty('--question-height',  `${(352 - questionRef.current?.clientHeight)}px`);
    console.log("Question Height:", questionRef.current?.clientHeight)
  }, [question])

  return (
    question ? <p className="question"ref={questionRef} > <span className="question_marker">{questionIndex}.</span>{question}</p> : null
  );
})

export default Question;
