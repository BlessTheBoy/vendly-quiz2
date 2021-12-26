import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useSwipeable } from "react-swipeable";
import { CSSTransition } from "react-transition-group";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";
import "./style.css";

const CarouselModal = ({ activeIndex, onClose, carousel, show, trigger }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => trigger(activeIndex + 1),
    onSwipedRight: () => trigger(activeIndex - 1)
  })

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="carouselModal" onClick={onClose}>
        <div className="carouselModal-content" onClick={(e) => e.stopPropagation()}>
          <div className="carouselModal-header">
            <p className="carouselModal-indicator">{`${activeIndex + 1}/${
              carousel?.length
            }`}</p>

            <div className="closeModal" onClick={onClose}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15 5L5 15"
                  stroke="#007575"
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5L15 15"
                  stroke="#007575"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="carouselModal-body" {...handlers} >
            <LeftArrow trigger={trigger} activeIndex={activeIndex} />
            {carousel ? (
              <img
                src={require(`./../../assets/images/${carousel[activeIndex]?.image}`)}
                alt=""
              />
            ) : (
              "Loading"
            )}
            <RightArrow trigger={trigger} activeIndex={activeIndex} />
          </div>
          <div className="carouselModal-caption">
            {carousel && carousel[activeIndex]?.caption}
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default CarouselModal;
