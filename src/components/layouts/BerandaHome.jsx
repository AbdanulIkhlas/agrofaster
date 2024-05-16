import { Link } from "react-router-dom";
import ButtonCustom from "../elements/buttonCustom";

const BerandaHome = () => {
  return (
    <div>
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
          <ButtonCustom customClass="relative z-10 bg-primary text-white hover:bg-silverTree">
            Pelajari lebih lanjut →
          </ButtonCustom>
        </Link>
      </section>
    </div>
  );
};

export default BerandaHome;
