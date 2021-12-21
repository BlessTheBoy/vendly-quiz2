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
  const [questionCompleted, setQuestionCompleted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [skinHeight, setSkinHeight] = useState(0)
  const [answerInView, setAnswerInView] = useState(false)
  const headerRef = useRef(null)
  const instructionRef = useRef(null)
  const carouselRef = useRef(null)
  const questionRef = useRef(null)
  const submitRef = useRef(null)
  const answersRef = useRef(null)


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
          "Three times",
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

const callbackFuntion = (entries) => {
  const [entry] = entries
  setAnswerInView(entry.isIntersecting)
  console.log(entry.isIntersecting)
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
}

useEffect(() => {
  const observer = new IntersectionObserver(callbackFuntion, options)
  if (answersRef.current) {
    observer.observe(answersRef.current)
  }
  return () => {
    if (answersRef.current) {
      observer.unobserve(answersRef.current)
    }
  }
}, [answersRef, options])

  const addAnswer = (answer) => {
    const newList = [...carouselList];
    newList[questionIndex].answer = answer;
    newList.every(question => question.every(item => item.answer !== undefined)) ? setQuestionCompleted(true) : setQuestionCompleted(false)
    setCarouselList(newList)      
  }
  
  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1)
    setQuestionCompleted(false)
  }

  return <div className="App">
    {carouselList ? 
      <Skin height={skinHeight}>
        <Header ref={headerRef} />
        <p ref={instructionRef} className='header_instruction'>Flip through the pictures to answer the question correctly.</p>
        <Carousel ref={carouselRef} carousel={carouselList[questionIndex]?.carousel}/>
        <Question ref={questionRef} questionIndex={questionIndex + 1} question={carouselList[questionIndex]?.question} />
        <Answers ref={answersRef} options={carouselList[0]?.option} onAnswer={addAnswer} questionIndex={questionIndex} />
        <div className="submit" ref={submitRef}>
        <button className={`button ${answerInView && "active"} `}  disabled={!questionCompleted} onClick={nextQuestion}>{answerInView? "Continue" : "Choose from Answers"}</button>
        <p className="instructions">Read <span onClick={() => setShowModal(true)}>Instructions</span></p>
        <InstructionModal title="My Modal" onClose={() => setShowModal(false)} show={showModal} />
       </div>
      </Skin>
      : ""}
  </div>;
}

export default App;
