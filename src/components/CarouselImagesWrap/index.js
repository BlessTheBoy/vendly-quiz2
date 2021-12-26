import "./style.css";
import CarouselImages from "../CarouselImages";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";

function CarouselImagesWrap({images, activeIndex, trigger, paused}) {
    return (
        <div className="mainCarousel">
        <LeftArrow trigger={trigger} activeIndex={activeIndex} />
        <CarouselImages images={images} activeIndex={activeIndex} trigger={trigger} paused={paused}/>
        <RightArrow trigger={trigger} activeIndex={activeIndex} />
      </div>
    )
}

export default CarouselImagesWrap
