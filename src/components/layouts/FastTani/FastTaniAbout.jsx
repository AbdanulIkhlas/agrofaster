import { Link } from "react-router-dom";
import ButtonCustom from "../../elements/buttonCustom";

const FastTaniAbout = () => {
  return (
    <div className="w-full bg-white font-jakartaSans py-8 md:mt-0 md:px-12 lg:px-16">
      {/* SECTION ABOUT US 1 */}
      <section className="w-full  lg:flex">
        {/* image 1 */}
        <div className="lg:w-[50%] lg:px-4 lg:py-8 ">
          <img
            src="../images/fast-tani-about.png"
            alt="About Us Image"
            className="w-full h-full md:rounded-3xl"
          />
        </div>
        {/* content 1 */}
        <div className="px-2 lg:w-[50%] lg:ps-7 lg:pt-16">
          <div
            className="leading-6 text-sm text-[#00352ECC] px-4 md:pr-2 md:leading-6
          lg:text-lg lg:leading-8 lg:pr-8"
          >
            <p className="mt-4 text-justify px-2 text-lg lg:mt-6">
              FastTani adalah mitra yang bergabung dengan komunitas Agrofaster,
              memanfaatkan layanan solusi yang ditawarkan oleh platform kami.
              Sebagai bagian dari komunitas ini, para FastTani mendapatkan akses
              ke forum pertanian yang memungkinkan mereka untuk berdiskusi,
              berbagi pengalaman, dan mencari solusi bersama-sama. Selain itu,
              Agrofaster memberikan FastTani kesempatan untuk memperluas pasar
              melalui pemasaran digital, sehingga produk mereka dapat dilihat
              oleh lebih banyak konsumen dan bahkan diekspor. Dengan demikian,
              FastTani dapat meningkatkan efisiensi dan profitabilitas usaha
              pertanian mereka, sambil berkontribusi pada pertanian yang lebih
              berkelanjutan dan inklusif.
            </p>
          </div>
          <div className="mt-4 px-4 flex flex-col gap-2">
            <Link className="mt-4 md:mt-4 lg:mt-12" to="./saprodi">
              <ButtonCustom customClass="relative z-10 bg-primary text-white duration-300 hover:shadow-primary hover:bg-silverTree">
                Cari Produk Saprodi
              </ButtonCustom>
            </Link>
            <Link className="mt-4 md:mt-2 lg:mt-4" to="./hasil-panen">
              <ButtonCustom customClass="relative z-10 bg-primary text-white duration-300 hover:shadow-primary hover:bg-silverTree">
                Jual Hasil Panen
              </ButtonCustom>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastTaniAbout;
