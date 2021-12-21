import './style.css';

function CarouselIndicators({arr, trigger, activeIndex}) {
    return (
        <div className='indicators'>
            {arr?.map((item, index) => <div key={index} className={`indicator ${index === activeIndex && "active"}`} onClick={() => trigger(index)}></div>)}
        </div>
    )
}

export default CarouselIndicators
