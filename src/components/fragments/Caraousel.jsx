import { useState, useEffect } from "react";
import CardLayanan from "./CardLayanan";
import PropTypes from "prop-types";

const Carousel = ({ data, srcLeftButtonPath, srcRightButtonPath, bulletsColor }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 425) {
        setCardsPerSlide(1);
      } else if (window.innerWidth >= 425 && window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(data.length / cardsPerSlide);

  const slideLeft = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const slideRight = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < totalSlides - 1 ? prevSlide + 1 : totalSlides - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center overflow-hidden">
        {/* button left */}
        <button
          className={`absolute left-2 z-10 bg-transparent transition-opacity duration-500 ${
            currentSlide === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={slideLeft}
          disabled={currentSlide === 0}
        >
          <img
            src={srcLeftButtonPath}
            alt="left arrow"
            className="w-8 h-8 fill-current text-[#2C946C]"
          />
        </button>
        {/* card slider */}
        <div className="w-full overflow-hidden">
          <div
            className="flex justify-start transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {data.map((item) => (
              <div
                key={item.id}
                className="flex justify-center min-w-[calc(100%/1)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)]"
              >
                <CardLayanan {...item} />
              </div>
            ))}
          </div>
        </div>
        {/* button right */}
        <button
          className={`absolute right-2 z-10 bg-transparent transition-opacity duration-500 ${
            currentSlide >= totalSlides - 1
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
          onClick={slideRight}
          disabled={currentSlide >= totalSlides - 1}
        >
          <img
            src={srcRightButtonPath}
            alt="right arrow"
            className="w-8 h-8 fill-current text-[#2C946C]"
          />
        </button>
      </div>
      {/* bullets nav */}
      <div className="flex justify-center mt-2 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? `bg-[${bulletsColor}]` : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

// PropTypes data
Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  srcLeftButtonPath: PropTypes.string.isRequired,
  srcRightButtonPath: PropTypes.string.isRequired,
  bulletsColor: PropTypes.string.isRequired,
};

export default Carousel;
