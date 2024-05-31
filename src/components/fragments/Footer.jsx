import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Footer = () => {
  return (
    <footer className=" font-jakartaSans bg-white border-t-2 border-primary ">
      <div className="w-full flex flex-col items-center pt-4 gap-4 lg:flex-row lg:px-32 lg:items-start lg:gap-16">
        <img
          src="../../../images/logo.png"
          alt="logo"
          className="w-[200px] mt-4  lg:w-[240px]"
        />
        <div className="md:flex md:gap-40  lg:w-full lg:gap-20">
          {/* section perusahaan */}
          <section className=" w-full mt-8 lg:mt-4">
            <h1 className="text-center font-bold text-lg text-[#2C946C] lg:text-2xl">
              Perusahaan
            </h1>
            <ul className="flex flex-col gap-2 text-base text-center mt-4 lg:font-medium">
              <li className="cursor-pointer hover:underline duration-300">
                <LinkScroll to="about" smooth={true} duration={1000}>
                  Tentang
                </LinkScroll>
              </li>
              <li className="cursor-pointer hover:underline duration-300">
                <Link to="/produk/fast-tani">Produk</Link>
              </li>
              <li className="cursor-pointer hover:underline duration-300">
                <Link to="/artikel/blog">Blog</Link>
              </li>
            </ul>
          </section>
          {/* section gabung */}
          <section className=" w-full mt-8 lg:mt-4">
            <h1 className="text-center font-bold text-lg text-[#2C946C] lg:text-2xl">
              Gabung
            </h1>
            <ul className="flex flex-col gap-2 text-base text-center mt-4 lg:font-medium">
              <li className="cursor-pointer hover:underline duration-300">
                <Link to="/komunitas">Komunitas Fast Tani</Link>
              </li>
              <li className="cursor-pointer hover:underline duration-300">
                <Link to="/">Saprodi</Link>
              </li>
            </ul>
          </section>
        </div>
        {/* section media sosial */}
        <section className=" mt-4 lg:flex lg:flex-col lg:items-start">
          <h1 className="text-center font-bold text-lg text-[#2C946C] lg:text-2xl lg:w-full ">
            Media Sosial
          </h1>
          <ul className="flex justify-center gap-4 text-base text-center mt-4">
            <li className="w-10 h-10 flex justify-center items-center rounded-full bg-primary p-[10px] hover:shadow-white">
              <a
                href="https://www.instagram.com/agrofaster.id/"
                target="_blank"
              >
                <img
                  src="../../../svg/instagram-fill.svg"
                  alt="instagram"
                  className="w-10 h-10"
                />
              </a>
            </li>
            <li className="w-10 h-10 flex justify-center items-center rounded-full bg-primary p-[10px] hover:shadow-white">
              <a
                href="https://www.youtube.com/channel/UCwKjqev-TZrS5a-k4FNna3g"
                target="_blank"
              >
                <img
                  src="../../../svg/youtube.svg"
                  alt="youtube"
                  className="w-10 h-10 "
                />
              </a>
            </li>
            <li className="w-10 h-10 flex justify-center items-center rounded-full bg-primary p-[10px] hover:shadow-white">
              <a href="https://www.tiktok.com/@agrofaster.id" target="_blank">
                <img
                  src="../../../svg/tiktok.svg"
                  alt="tiktok"
                  className="w-10 h-10 "
                />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <section className="w-full mt-8 text-center py-6 border-t border-slate-400">
        <p className="text-sm text-[#598976] font-semibold">
          Copyright @2024 Agrofaster. All right reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
