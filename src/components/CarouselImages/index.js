import "./style.css";

function CarouselImages({ images, activeIndex }) {
  return (
    <div className="imageCarousel">
      <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
      {images.map((image, index) => (
        <div className="imageContainer" key={index}>
          <img src={require(`./../../assets/images/${image}`)} alt="" />
        </div>
      ))}
      </div>
    </div>
  );
}

export default CarouselImages;