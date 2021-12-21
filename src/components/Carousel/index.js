import { forwardRef, useEffect, useState } from "react";
import CarouselCaptions from "../CarouselCaptions";
import CarouselImagesWrap from "../CarouselImagesWrap";
import CarouselIndicators from "../CarouselIndicators";
import "./style.css";
import { useSwipeable } from 'react-swipeable';


const Carousel = forwardRef(({carousel}, ref) => {
  const [images, setImages] = useState([])
  const [captions, setCaptions] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)


  useEffect(() => {        
      setImages(carousel?.map(item => item.image))
      setCaptions(carousel?.map(item => item.caption))
  }, [carousel])


  const updateIndex = (index) => {
      if (index < 0) {
        index = 0;
      } else if (index > images.length - 1) {
        index = images.length - 1;
      }

      setActiveIndex(index)
    }

    const handlers = useSwipeable({
      onSwipedLeft: () => updateIndex(activeIndex + 1),
      onSwipedRight: () => updateIndex(activeIndex - 1)
    })

  return (
      <div className="carousel" ref={ref} {...handlers}>
          <CarouselImagesWrap images={images} activeIndex={activeIndex} trigger={updateIndex}/>
          <CarouselIndicators arr={images} activeIndex={activeIndex} trigger={updateIndex}/>
          <CarouselCaptions captions={captions} activeIndex={activeIndex} />
      </div>
  )
})

export default Carousel

