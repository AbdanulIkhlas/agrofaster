import ButtonCustom from "../elements/buttonCustom";
import { Link } from "react-router-dom";

const BerandaAboutUs = () => {
  return (
    <div className="w-full font-jakartaSans mt-4">
      {/* SECTION ABOUT US 1 */}
      <section className="md:flex">
        {/* image 1 */}
        <div className="md:w-[50%] ">
          <img
            src="./images/about-us.jpg"
            alt="About Us Image"
            className="w-full h-full aspect-square md:aspect-auto"
          />
        </div>
        {/* content 1 */}
        <div className="md:w-[50%] lg:ps-7 ">
          <h1
            className="mt-6 text-primary font-bold text-2xl ps-4
          lg:text-3xl"
          >
            Siapa Agrofaster?
          </h1>
          <div
            className="leading-6 text-sm text-[#00352ECC] px-4 
          lg:text-xl lg:leading-9 lg:pr-8"
          >
            <p className="mt-4 lg:mt-6">
              Agrofaster adalah platform inovatif yang bertekad untuk mengubah
              lanskap pertanian dengan memperkuat posisi petani di pasar. Kami
              percaya bahwa pertanian adalah tulang punggung masyarakat dan
              kesejahteraan global.
            </p>
            <p className="mt-4 lg:mt-8">
              Dengan fokus pada peningkatan bargaining position petani, kami
              menghadirkan solusi teknologi yang memungkinkan para petani untuk
              berinteraksi satu sama lain dengan akses pasar yang lebih luas,
              menghilangkan perantara yang membebani dan menjamin harga yang
              adil untuk hasil panen mereka. Kami berkomitmen untuk membangun
              ekosistem pertanian yang inklusif dan berkelanjutan, di mana
              setiap petani memiliki kesempatan yang sama untuk berhasil.
            </p>
          </div>
        </div>
      </section>
      {/* SECTION ABOUT US 2 */}
      <section className="md:flex md:flex-row-reverse">
        {/* image 2 */}
        <div className="md:w-[50%] ">
          <img
            src="./images/about-us-2.png"
            alt="About Us Image"
            className="w-full h-full aspect-square md:aspect-auto"
          />
        </div>
        <div className="md:w-[50%] px-6">
          <h1
            className="mt-6 text-black font-bold text-2xl
          lg:text-4xl"
          >
            VISI Agrofaster
          </h1>
          <p
            className="leading-6 mt-4 text-sm text-[#00352ECC]
          lg:text-lg lg:leading-9 lg:pr-8"
          >
            Visi Agrofaster adalah mewujudkan transformasi yang merata dalam
            sektor pertanian, di mana setiap petani memiliki akses terhadap
            pasar yang adil dan berkelanjutan. Kami bertekad untuk menciptakan
            sebuah ekosistem di mana petani dapat meningkatkan pendapatan
            mereka, merasa dihargai, dan berkontribusi pada ketahanan pangan
            global. Kami percaya bahwa dengan memperkuat posisi tawar petani,
            kami dapat memperbaiki kesejahteraan mereka dan meningkatkan
            keberlanjutan pertanian secara keseluruhan. Melalui inovasi
            teknologi dan kolaborasi yang berkelanjutan, kami berkomitmen untuk
            menjadi pionir dalam memimpin perubahan positif dalam industri
            pertanian, membawa dampak yang berkelanjutan bagi petani dan
            komunitas mereka.
          </p>
          <div className="w-40 mt-4 md:mt-8 lg:mt-12 border border-black">
            <Link className="" to="/blog">
              <ButtonCustom customClass="relative z-10 bg-primary text-white hover:bg-silverTree">
                About Us
              </ButtonCustom>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BerandaAboutUs;
