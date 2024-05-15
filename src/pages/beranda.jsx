import { useState } from "react";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import ButtonCustom from "../components/elements/buttonCustom";
import { Link } from "react-router-dom";
import { services } from "../data/layanan";
import CardLayanan from "../components/fragments/CardLayanan";

const Beranda = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(services.length / 3);

  const slideLeft = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const slideRight = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < totalSlides - 1 ? prevSlide + 1 : totalSlides - 1
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* navbar absolute */}
      <Navbar />
      <main className="w-full font-jakartaSans min-h-[1300px]">
        {/* section 1 : home */}
        <section
          className="relative w-full flex flex-col justify-center items-start px-4 aspect-9/16 bg-cover bg-center bg-no-repeat bg-[url('./images/home-mobile.png')] 
        md:bg-[url('./images/home-medium.png')] md:aspect-square md:px-8 lg:aspect-video lg:bg-[url('./images/home-dekstop.png')] lg:px-16"
        >
          <div className="absolute inset-0 bg-black opacity-40 text-gray"></div>
          <h1
            className="relative text-white text-2xl font-bold z-10 
          md:text-4xl lg:text-[64px] lg:leading-[64px]"
          >
            Menyatukan Petani dan Pasar Tanpa Batas. Tumbuhkan Bisnis Pertanian
            Anda.
          </h1>
          <Link className="mt-4 md:mt-8 lg:mt-12" to="/blog">
            <ButtonCustom customClass="relative z-10 bg-primary text-white">
              Pelajari lebih lanjut →
            </ButtonCustom>
          </Link>
        </section>
        {/* section 2 : layanan */}
        <section className="flex flex-col items-center py-4 md:py-8">
          <div className="relative w-full">
            <div className="flex items-center overflow-hidden">
              <button
                className="absolute left-0 z-10 bg-transparent"
                onClick={slideLeft}
              >
                <img
                  src="../../svg/left-arrow.svg"
                  alt="left arrow"
                  className="w-8 h-8 fill-current text-[#2C946C]"
                />
              </button>
              <div className="w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {services.map((service, index) => (
                    <div key={service.id} className="min-w-[calc(100%/3)] px-4">
                      <CardLayanan {...service} />
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="absolute right-0 z-10 bg-transparent"
                onClick={slideRight}
              >
                <img
                  src="../../svg/right-arrow.svg"
                  alt="right arrow"
                  className="w-8 h-8 fill-current text-[#2C946C]"
                />
              </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-[#2C946C]" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Beranda;
