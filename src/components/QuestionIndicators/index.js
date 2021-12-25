import "./style.css";


function QuestionIndicators({active, list, trigger}) {
    return (
        <div className="questionIndicators">
            {list.map((item, index) => <div className={`questionIndicator ${index === active && "active"} ${!item.viewed && "unVisited"}`} key={index} onClick={() => trigger(index)}></div>)
            }
          </div>
    )
}

export default QuestionIndicators
