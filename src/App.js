import "./App.css";
import { useEffect, useRef, useState } from "react";
import Skin from "./components/Skin";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Question from "./components/Question";
import Answers from "./components/Answers";
import InstructionModal from "./components/InstructionModal";
import QuestionIndicators from "./components/QuestionIndicators";

function App() {
  const [carouselList, setCarouselList] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionCompleted, setQuestionCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [answerInView, setAnswerInView] = useState(false);
  const headerRef = useRef(null);
  const instructionRef = useRef(null);
  const carouselRef = useRef(null);
  const questionRef = useRef(null);
  const submitRef = useRef(null);
  const answersRef = useRef(null);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const position = scrollRef.current?.scrollTop;
    if (position > 180) {
      setAnswerInView(true);
    } 
  };

  const scrollAnswerIntoView = () => {
    scrollRef.current?.scrollTo(0, 500);

    // console.log("Scroll answer into view");
  };

  async function updateQuestion (index) {
    index < carouselList.length && setQuestionIndex(index)
    if (!carouselList[index].viewed) {
      await scrollTo(scrollRef, 0).then(() => {
        console.log("Promise resolved")
        setAnswerInView(false)
      }).catch(() => console.log("Promise failed"))
    } else {
      carouselList[index].viewed = true
    }

    console.log("nextQuestion");
  };

  function scrollTo (elementRef, offset = 0) {
    elementRef.current?.scrollTo(0, offset);
    
    return new Promise((resolve, reject) => {
      const failed = setTimeout(() => {
        reject();
      }, 2000);
  
      const scrollHandler = () => {
        if (elementRef.current?.scrollTop === offset) {
          elementRef.current?.removeEventListener("scroll", scrollHandler);
          clearTimeout(failed);
          resolve();
        }
      };
      if (elementRef.current?.scrollTop === offset) {
        clearTimeout(failed);
        resolve();
      } else {
        elementRef.current?.addEventListener("scroll", scrollHandler);
      }
    });
  }

  const buttonClick = () => {
    console.log("Button clicked")
    if (questionCompleted)  return 
    answerInView ? updateQuestion(questionIndex + 1) : scrollAnswerIntoView();
  };

  useEffect(() => {
    scrollRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      scrollRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Retrieve carousel items (images and questions)
    const data = [
      {
        carousel: [
          {
            image: "carousel1.png",
            caption: "Livebridge helping people every Sunday.",
          },
          {
            image: "carousel2.png",
            caption: "Livebridge helping people last week.",
          },
          {
            image: "carousel3.png",
            caption: "Founders of Livebridge",
          },
        ],
        question: "How many times has Vendly been redesigned?",
        option: [
          "Flip through the pictures to answer the question correctly.",
          "Five times",
          "Four times",
          "Two times",
        ],
        answer: "Five times",
      },
      {
        carousel: [
          {
            image: "carousel3.png",
            caption: "Founders of Livebridge",
          },
          {
            image: "carousel1.png",
            caption: "Livebridhe helping people every Sunday.",
          },
          {
            image: "carousel2.png",
            caption: "Livebridge helping people every Sunday.",
          },
        ],
        question: "Who is the C.E.O of Vendly?",
        option: [
          "Martha Johnson",
          "Bob Nzelu",
          "Joseph Emmanuel",
          "Claire Vincee",
        ],
      },
    ];
    setCarouselList(data);
  }, []);

    useEffect(() => {
  if (!answerInView && carouselList[questionIndex]?.answer) {
    scrollAnswerIntoView()
  }

    }, [carouselList[questionIndex]?.answer])


  const addAnswer = (answer) => {
    let newList = [...carouselList];
    newList[questionIndex].answer = answer;
    newList.every((list) => list.answer !== undefined)
      ? setQuestionCompleted(true)
      : setQuestionCompleted(false);
    setCarouselList(newList);
    console.log(newList)
  };

  

  return (
    <div className="App">
      {carouselList ? (
        <Skin >
          <QuestionIndicators active={questionIndex} list={carouselList} trigger={updateQuestion}/>
          <Header ref={headerRef} />
          <div ref={scrollRef} className="scroll">
            <p ref={instructionRef} className="header_instruction">
              Flip through the pictures to answer the question correctly.
            </p>
            <Carousel
              ref={carouselRef}
              carousel={carouselList[questionIndex]?.carousel}
            />
            <Question
              ref={questionRef}
              questionIndex={questionIndex + 1}
              question={carouselList[questionIndex]?.question}
            />
            <Answers
              ref={answersRef}
              options={carouselList[questionIndex]?.option}
              onAnswer={addAnswer}
              questionIndex={questionIndex}
              answer={carouselList[questionIndex]?.answer}
            />
          </div>
          <div className="submit" ref={submitRef}>
            <button
              className={`button arr ${answerInView && "active"} `}
              disabled={answerInView && !carouselList[questionIndex]?.answer}
              onClick={buttonClick}
            >
              {questionCompleted ? "Submit" : (answerInView ? "Continue" : "Choose from Answers")}
            </button>
            <p className="instructions">
              Read <span onClick={() => setShowModal(true)}>Instructions</span>
            </p>
            <InstructionModal
              title="My Modal"
              onClose={() => setShowModal(false)}
              show={showModal}
            />
          </div>
        </Skin>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
