import { useEffect, useState } from "react";
import CarouselImagesWrap from "../CarouselImagesWrap";
import Indicators from "../Indicators";
import "./style.css";


function Carousel({carousel}) {
    const [images, setImages] = useState([])
    const [captions, setCaptions] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)


    useEffect(() => {        
        setImages(carousel.map(item => item.image))
        setCaptions(carousel.map(item => item.caption))
    }, [carousel])


    const updateIndex = (index) => {
        if (index < 0) {
          index = 0;
        } else if (index > images.length - 1) {
          index = images.length - 1;
        }
  
        setActiveIndex(index)
      }

    return (
        <div className="carousel">
            <CarouselImagesWrap images={images} activeIndex={activeIndex} trigger={updateIndex}/>
            <Indicators arr={images} activeIndex={activeIndex} trigger={updateIndex}/>
        </div>
    )
}

export default Carousel

