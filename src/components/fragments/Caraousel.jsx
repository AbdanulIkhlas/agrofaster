import { useState, useEffect, useRef, Fragment } from "react";
import CardLayanan from "./CardLayanan";
import PropTypes from "prop-types";
import PoweredBy from "./PoweredBy";
import TestimoniCard from "./TestimoniCard";
import InfoDiscountCard from "./InfoDiscountCard";

const Carousel = ({
  data,
  srcLeftButtonPath,
  srcRightButtonPath,
  chooseFragment,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoSlideInterval = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 425) {
        setCardsPerSlide(1);
      } else if (window.innerWidth >= 425 && window.innerWidth < 1024) {
        if (chooseFragment === "diskon") {
          setCardsPerSlide(1);
        } else {
          setCardsPerSlide(2);
        }
      } else {
        if (chooseFragment === "layanan") {
          setCardsPerSlide(3);
        } else if (chooseFragment === "poweredBy") {
          setCardsPerSlide(4);
        } else if (chooseFragment === "testimoni") {
          setCardsPerSlide(3);
        } else if (chooseFragment === "diskon") {
          setCardsPerSlide(1);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [chooseFragment]);

  useEffect(() => {
    autoSlideInterval.current = setInterval(slideRight, 3000);
    return () => clearInterval(autoSlideInterval.current);
  }, [currentSlide]);

  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        if (currentSlide === data.length / cardsPerSlide) {
          setIsTransitioning(false);
          setCurrentSlide(0);
        } else if (currentSlide === -1) {
          setIsTransitioning(false);
          setCurrentSlide(data.length / cardsPerSlide - 1);
        } else {
          setIsTransitioning(false);
        }
      }, 700);
    }
  }, [currentSlide, isTransitioning, data.length, cardsPerSlide]);

  const totalSlides = Math.ceil(data.length / cardsPerSlide);
  const bgVariant =
    chooseFragment === "layanan"
      ? "border-[#2C946C]"
      : chooseFragment === "poweredBy"
      ? "border-[#2C946C]"
      : "border-[#2C946C]";

  const slideLeft = () => {
    clearInterval(autoSlideInterval.current);
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : totalSlides - 1
    );
    setIsTransitioning(true);
  };

  const slideRight = () => {
    clearInterval(autoSlideInterval.current);
    setCurrentSlide((prevSlide) =>
      prevSlide < totalSlides - 1 ? prevSlide + 1 : 0
    );
    setIsTransitioning(true);
  };

  const goToSlide = (index) => {
    clearInterval(autoSlideInterval.current);
    setCurrentSlide(index);
    setIsTransitioning(true);
  };

  const handleTouchStart = (e) => {
    clearInterval(autoSlideInterval.current);
    const touchStartX = e.touches[0].clientX;
    slideRef.current = touchStartX;
  };

  const handleTouchMove = (e) => {
    if (!slideRef.current) return;
    const touchCurrentX = e.touches[0].clientX;
    const distance = touchCurrentX - slideRef.current;
    if (distance > 50) {
      slideLeft();
      slideRef.current = null;
    } else if (distance < -50) {
      slideRight();
      slideRef.current = null;
    }
  };

  return (
    <div
      className="relative w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="flex items-center overflow-hidden">
        {/* button left */}
        <button
          className={`hidden md:block absolute left-2 z-10 bg-transparent transition-opacity duration-500 ${
            totalSlides === 1 || chooseFragment === "diskon"
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
          onClick={slideLeft}
          disabled={isTransitioning}
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
            className={`flex transition-transform duration-700 ease-in-out ${
              isTransitioning ? "" : "transition-none"
            }`}
            style={{
              transform: `translateX(-${
                (currentSlide * 100) / cardsPerSlide
              }%)`,
            }}
          >
            {data.map((item) => {
              if (chooseFragment === "layanan") {
                return (
                  <div
                    key={item.id}
                    className="flex justify-center min-w-[calc(100%/1)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)]"
                  >
                    <CardLayanan {...item} />
                  </div>
                );
              } else if (chooseFragment === "poweredBy") {
                return (
                  <div
                    key={item.id}
                    className="flex justify-center min-w-[calc(100%/1)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/4)]"
                  >
                    <PoweredBy {...item} />
                  </div>
                );
              } else if (chooseFragment === "testimoni") {
                return (
                  <div
                    key={item.id}
                    className="flex justify-center min-w-[calc(100%/1)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)]"
                  >
                    <TestimoniCard {...item} />
                  </div>
                );
              } else if (chooseFragment === "diskon") {
                return (
                  <div
                    key={item.id}
                    className="flex justify-center min-w-[calc(100%/1)]"
                  >
                    <InfoDiscountCard {...item} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        {/* button right */}
        <button
          className={`hidden md:block absolute right-2 z-10 bg-transparent transition-opacity duration-500 ${
            totalSlides === 1 || chooseFragment === "diskon"
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
          onClick={slideRight}
          disabled={isTransitioning}
        >
          <img
            src={srcRightButtonPath}
            alt="right arrow"
            className="w-8 h-8 fill-current text-[#2C946C]"
          />
        </button>
      </div>
      {/* bullets nav */}
      <div
        className={`flex justify-center mt-2 space-x-2 ${
          totalSlides === 1 || chooseFragment === "diskon"
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <bg
            key={index}
            className={`flex justify-center items-center p-1 rounded-full cursor-pointer border ${
              index === currentSlide ? "border-primary" : "border-[#8f8d8d]"
            }`}
            onClick={() => goToSlide(index)}
          >
            <div
              key={index}
              className={`w-1 h-1 rounded-full cursor-pointer border ${
                index === currentSlide ? " border-primary" : "border-[#8f8d8d]"
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          </bg>
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
  chooseFragment: PropTypes.string.isRequired,
};

export default Carousel;
