import "./App.css";
import { useEffect, useState } from "react";
import Skin from "./components/Skin";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

function App() {
  const [carouselList, setCarouselList] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

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

  return <div className="App">
    {carouselList ? 
      <Skin>
        <Header />
        <Carousel carousel={carouselList[questionIndex]?.carousel}/>
      </Skin>
      : ""}
  </div>;
}

export default App;
