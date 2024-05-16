const BerandaAboutUs = () => {
  return (
    <div className="w-full font-jakartaSans mt-4 md:flex">
      {/* IMAGE ABOUT US */}
      <section className="md:w-[50%] ">
        <img
          src="./images/about-us.jpg"
          alt="About Us Image"
          className="w-full h-full aspect-square md:aspect-auto"
        />
      </section>
      {/* CONTENT */}
      <section className="md:w-[50%] lg:ps-7 ">
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
            menghilangkan perantara yang membebani dan menjamin harga yang adil
            untuk hasil panen mereka. Kami berkomitmen untuk membangun ekosistem
            pertanian yang inklusif dan berkelanjutan, di mana setiap petani
            memiliki kesempatan yang sama untuk berhasil.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BerandaAboutUs;
