import { Link } from "react-router-dom";
import ButtonCustom from "../../elements/buttonCustom";

const BerandaHome = () => {
  return (
    <div>
      <section className="relative w-full flex flex-col justify-center items-start h-[780px] lg:h-[800px]">
        <img
          src="./images/home-mobile.png"
          alt="home"
          className="block aspect-9/16 absolute z-0 w-full h-full md:hidden lg:hidden"
        />
        <img
          src="./images/home-medium.png"
          alt="home"
          className="hidden absolute z-0 w-full h-full md:block md:aspect-square lg:hidden"
        />
        <img
          src="./images/home-dekstop.png"
          alt="home"
          className="hidden absolute z-0 w-full h-full md:hidden lg:block "
        />
        <div className="absolute inset-0 bg-black opacity-40 text-gray"></div>
        <div className="relative w-full px-4 flex flex-col justify-center items-start md:px-8 lg:px-16">
          <h1
            className="relative text-white text-2xl font-bold z-10 
          md:text-4xl lg:text-[64px] lg:leading-[64px]"
          >
            Menyatukan Petani dan Pasar Tanpa Batas. Tumbuhkan Bisnis Pertanian
            Anda.
          </h1>
          <Link className="mt-4 md:mt-8 lg:mt-12" to="/blog">
            <ButtonCustom customClass="relative z-10 bg-primary text-white duration-300 hover:shadow-primary hover:bg-silverTree">
              Pelajari lebih lanjut →
            </ButtonCustom>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BerandaHome;
