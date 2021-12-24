import "./style.css";


function QuestionIndicators({active, list, trigger}) {
    return (
        <div className="questionIndicators">
            {list.map((item, index) => {
              if (index === active) {
                return (
                  <div className="questionIndicator active" key={index} onClick={() => trigger(index)}></div>
                );
              } else {
                return (
                  <div className="questionIndicator" key={index}onClick={() => trigger(index)}></div>
                );
              }
                
              })
            }
          </div>
    )
}

export default QuestionIndicators
