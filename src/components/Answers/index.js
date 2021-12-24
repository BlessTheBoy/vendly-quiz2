import { forwardRef } from "react";
import "./style.css";


const Answers = forwardRef(({questionIndex, options, onAnswer, answer}, ref) => {
    return (
        <div ref={ref} className="question_options">
      {options?.map((item, index) => (
          <div className="radio" key={`${questionIndex}${index}`}>
              <input
                type="radio"
                value={item}
                name={questionIndex}
                id={`${questionIndex}${item}`}
                onChange={() => onAnswer(item)}
                checked={answer === item}
              />
            <label htmlFor={`${questionIndex}${item}`} >              
              {item}
            </label>
          </div>
        ))}
      </div>
    )
})

export default Answers
