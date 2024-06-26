import SectionHead from "../../elements/sectionHead";

const BerandaAboutUs = () => {
  return (
    <div className="w-full font-jakartaSans mt-4 md:mt-0 md:px-12 lg:px-28">
      {/* SECTION ABOUT US 1 */}
      <section className="lg:flex ">
        {/* image 1 */}
        <div className="md:w-full lg:w-[45%] lg:px-4 lg:py-8  ">
          <img
            src="./images/about-us.png"
            alt="About Us Image"
            className="w-full lg:w-[500px] lg:h-[500px] md:rounded-3xl "
          />
        </div>
        {/* content 1 */}
        <div className="px-2 lg:w-[55%] lg:ps-7 lg:pt-16 ">
          <SectionHead
            customClassName="px-4 mt-4 lg:mt-0"
            content={[
              {
                title: "Siapa ",
                classname: "font-bold lg:text-[32px]",
              },
              {
                title: "Agrofaster? ",
                classname: "text-primary font-bold lg:text-[32px]",
              },
            ]}
          />
          <div
            className="leading-6 text-sm text-[#00352ECC] px-4 md:pr-2 md:leading-6
          lg:text-lg lg:leading-8 lg:pr-8"
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
      <section className="mt-10 lg:flex lg:flex-row-reverse">
        {/* image 2 */}
        <div className="lg:w-[45%] md:py-10 lg:px-4 lg:py-8 lg:flex lg:justify-end">
          <img
            src="./images/about-us-2.png"
            alt="About Us Image"
            className="w-full lg:w-[500px] md:rounded-3xl "
          />
        </div>
        <div className="lg:w-[55%] px-6 mt-4 md:mt-0 md:px-8">
          <SectionHead
            customClassName="px-0 lg:px-4 lg:mt-4 lg:mt-20"
            content={[
              {
                title: "Visi ",
                classname: "font-bold lg:text-[32px]",
              },
              {
                title: "Agrofaster? ",
                classname: "text-primary font-bold lg:text-[32px]",
              },
            ]}
          />

          <p
            className="leading-6 mt-4 lg:mt-8 text-sm text-[#00352ECC] md:leading-6
            lg:text-base lg:leading-8 lg:pr-6"
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
        </div>
      </section>
    </div>
  );
};

export default BerandaAboutUs;
