import "./style.css";

function CarouselCaptions({captions, activeIndex=0}) {
    return (
        captions?.length > 0 && <p className="carouselCaption">{captions[activeIndex]}</p>
    )
}

export default CarouselCaptions
