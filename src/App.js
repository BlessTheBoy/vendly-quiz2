import "./App.css";
import { useEffect, useRef, useState } from "react";
import Skin from "./components/Skin";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Question from "./components/Question";
import Answers from "./components/Answers";
import InstructionModal from "./components/InstructionModal";

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
    if (position > 150) {
      setAnswerInView(true);
    } 
  };

  const scrollAnswerIntoView = () => {
    scrollRef.current?.scrollTo(0, 500);

    // console.log("Scroll answer into view");
  };

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setQuestionCompleted(false);    
    scrollRef.current?.scrollTo(0, 0);

    console.log("nextQuestion");
  };

  const buttonClick = () => {
    console.log("Button clicked")
    answerInView ? nextQuestion() : scrollAnswerIntoView();
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
      },
      {
        carousel: [
          {
            image: "carousel1.png",
            caption: "Livebridge helping people every Sunday.",
          },
          {
            image: "carousel2.png",
            caption: "Livebridhe helping people every Sunday.",
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
          "Three times",
          "Two times",
        ],
      },
    ];
    setCarouselList(data);
  }, []);

  //   useEffect(() => {
  // // set height of skin
  // carouselRef.current.clientHeight && setSkinHeight(instructionRef.current?.clientHeight + headerRef.current?.clientHeight + carouselRef.current?.clientHeight + questionRef?.current.clientHeight + submitRef.current?.clientHeight)

  //   }, [instructionRef])

  const addAnswer = (answer) => {
    const newList = [...carouselList];
    newList[questionIndex].answer = answer;
    newList.every((list) => list.answer !== undefined)
      ? setQuestionCompleted(true)
      : setQuestionCompleted(false);
    setCarouselList(newList);
  };

  

  return (
    <div className="App">
      {carouselList ? (
        <Skin >
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
              options={carouselList[0]?.option}
              onAnswer={addAnswer}
              questionIndex={questionIndex}
            />
          </div>
          <div className="submit" ref={submitRef}>
            <button
              className={`button arr ${answerInView && "active"} `}
              disabled={answerInView && !carouselList[questionIndex]?.answer}
              onClick={buttonClick}
            >
              {answerInView ? "Continue" : "Choose from Answers"}
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
