import "./style.css";

function CarouselCaptions({captions, activeIndex}) {
    return (
        <p className="carouselCaption">{captions[activeIndex]}</p>
    )
}

export default CarouselCaptions
