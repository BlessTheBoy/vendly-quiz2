import { forwardRef } from "react";
import "./style.css";


const Answers = forwardRef(({questionIndex, options, onAnswer}, ref) => {
    return (
        <div ref={ref} className="question_options">
      {options?.map((item, index) => (
          <div className="radio" key={index}>
              <input
                type="radio"
                value={item}
                name={questionIndex}
                id={item}
                onChange={() => onAnswer(item)}
              />
            <label htmlFor={item} >
              
              {item}
            </label>
          </div>
        ))}
      </div>
    )
})

export default Answers
