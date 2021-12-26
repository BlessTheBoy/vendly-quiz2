import { useState } from "react";
import CarouselModal from "../CarouselModal";
import "./style.css";

function CarouselImages({ images, activeIndex, trigger, paused }) {
  const [showCarouselModal, setShowCarouselModal] = useState(false)

  const close = () => {
    setShowCarouselModal(false)
    paused(false)
  }
  const open = () => {
    setShowCarouselModal(true)
    paused(true)
  }

  return (
    <>
    <div className="imageCarousel">
      <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
      {images?.map((item, index) => (
        <div className="imageContainer" key={index} onClick={open}>
          <img src={require(`./../../assets/images/${item.image}`)} alt="" />
        </div>
      ))}
      </div>
    </div>
    <CarouselModal
              onClose={close}
              show={showCarouselModal}
              activeIndex={activeIndex}
              carousel={images}
              trigger={trigger}
            />
      </>
  );
}

export default CarouselImages;