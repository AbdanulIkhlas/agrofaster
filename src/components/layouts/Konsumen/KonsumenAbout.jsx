const KonsumenAbout = () => {
  return (
    <div className="w-full bg-white font-jakartaSans py-8 md:mt-0 md:px-12 lg:px-16">
      {/* SECTION ABOUT US 1 */}
      <section className="w-full  lg:flex">
        {/* image 1 */}
        <div className="lg:w-[50%] lg:px-4 lg:py-8 ">
          <img
            src="../images/konsumen-about.png"
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
              Produk yang dijual oleh Agrofaster adalah produk berkualitas
              tinggi yang telah memenuhi standar industri. Kami berkomitmen
              untuk menyediakan hasil panen terbaik dari para petani mitra kami,
              yang telah melalui proses seleksi dan pengawasan ketat. Dengan
              memastikan bahwa setiap produk memenuhi kriteria kualitas, kami
              memberikan jaminan bahwa pelanggan akan menerima hasil pertanian
              yang segar, sehat, dan sesuai dengan standar yang berlaku.
              Kepercayaan dan kepuasan pelanggan adalah prioritas kami, sehingga
              setiap produk yang sampai ke tangan konsumen telah melalui proses
              verifikasi yang teliti
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KonsumenAbout;
