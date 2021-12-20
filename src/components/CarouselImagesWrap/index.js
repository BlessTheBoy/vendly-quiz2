import "./style.css";
import CarouselImages from "../CarouselImages";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";

function CarouselImagesWrap({images, activeIndex, trigger}) {
    return (
        <div className="mainCarousel">
        <LeftArrow trigger={trigger} activeIndex={activeIndex} />
        <CarouselImages images={images} activeIndex={activeIndex} />
        <RightArrow trigger={trigger} activeIndex={activeIndex} />
      </div>
    )
}

export default CarouselImagesWrap
