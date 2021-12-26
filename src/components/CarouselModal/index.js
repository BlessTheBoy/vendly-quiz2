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
    onSwipedRight: () => trigger(activeIndex - 1),
  });

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="carouselModal" onClick={onClose}>
        <div
          className="carouselModal-content"
          onClick={(e) => e.stopPropagation()}
        >
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
          <div className="carouselModal-body" {...handlers}>
            <div className="leftArr" onClick={() => trigger(activeIndex - 1)}>
              <svg
                width="4.1865mm"
                height="6.9261mm"
                version="1.1"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  imageRendering: "optimizeQuality",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                viewBox="0 0 8.54 14.13"
              >
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <polygon
                    className="fil0 str0"
                    points="7.08,0.29 8.25,1.46 2.64,7.06 8.25,12.66 7.08,13.84 0.29,7.06 "
                  />
                </g>
              </svg>
            </div>
            {/* <LeftArrow trigger={trigger} activeIndex={activeIndex} /> */}
            {carousel ? (
              <img
                src={require(`./../../assets/images/${carousel[activeIndex]?.image}`)}
                alt=""
              />
            ) : (
              "Loading"
            )}
            <div className="rightArr" onClick={() => trigger(activeIndex + 1)}>
            <svg width="4.1867mm" height="6.9259mm" version="1.1" style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  imageRendering: "optimizeQuality",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
viewBox="0 0 837.32 1385.15">
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <polygon className="fil0 str0" points="143.46,1356.87 28.3,1241.53 578.31,692.58 28.3,143.64 143.46,28.28 809.02,692.58 "/>
 </g>
</svg>
            </div>
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
