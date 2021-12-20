import "./App.css";
import { useEffect, useState } from "react";
import Skin from "./components/Skin";
import Header from "./components/Header";

function App() {
  const [carouselList, setCarouselList] = useState([]);

  useEffect(() => {
    // Retrieve carousel items (images and questions)
    const data = [
      {
        carosel: [
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
        carosel: [
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
    // setQuestions(data.map(item => item.questions))
    // setImages(data.map(item => item.image))
    // setCaptions(data.map(item => item.caption))
  }, []);

  return <div className="App">
    {carouselList ? 
      <Skin>
        <Header />
      </Skin>
      : ""}
  </div>;
}

export default App;
