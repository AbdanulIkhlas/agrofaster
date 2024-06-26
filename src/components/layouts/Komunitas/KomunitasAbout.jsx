const KomunitasAbout = () => {
  return (
    <div className="w-full font-jakartaSans mt-4 md:mt-0 md:px-12 lg:px-16">
      {/* SECTION ABOUT US 1 */}
      <section className="md:flex">
        {/* image 1 */}
        <div className="md:w-[50%] lg:px-4 lg:py-8 ">
          <img
            src="./images/about-us.png"
            alt="About Us Image"
            className="w-full h-full md:rounded-3xl"
          />
        </div>
        {/* content 1 */}
        <div className="px-2 md:w-[50%] lg:ps-7 lg:pt-10">
          <h1
            className="mt-10 text-primary font-bold text-2xl ps-4 md:mt-0 md:text-2xl
          lg:text-3xl"
          >
            Apa Itu Komunitas FastTani ?
          </h1>
          <div
            className="leading-6 text-sm text-[#00352ECC] px-4 md:pr-2 md:leading-6
          lg:text-lg lg:leading-8 lg:pr-8"
          >
            <p className="mt-4 lg:mt-6">
              Komunitas petani FastTani di Agrofaster adalah sebuah jaringan
              yang dinamis dan kolaboratif yang menghubungkan petani dari
              seluruh Indonesia. Melalui platform ini, para petani dapat
              bergabung dalam forum diskusi untuk berbagi pengalaman, mengatasi
              tantangan, dan menemukan solusi bersama untuk berbagai masalah
              pertanian. Komunitas ini tidak hanya memberikan dukungan dan
              pengetahuan, tetapi juga membuka akses ke pasar yang lebih luas
              melalui pemasaran digital.
            </p>
            <p className="mt-4 lg:mt-6">
              Dengan FastTani, petani dapat memperluas jaringan mereka,
              meningkatkan keterampilan, dan menemukan peluang baru untuk
              menjual hasil panen mereka, termasuk kesempatan untuk ekspor.
              Bergabung dengan komunitas FastTani berarti menjadi bagian dari
              gerakan yang memberdayakan petani dan mendorong pertanian yang
              berkelanjutan dan inklusif.
            </p>
          </div>
        </div>
      </section>
      {/* SECTION ABOUT US 2 */}
      <section className="mt-10 md:flex md:flex-row-reverse">
        {/* image 2 */}
        <div className="md:w-[50%] md:py-10 lg:px-4 lg:py-8">
          <img
            src="./images/about-us-2.png"
            alt="About Us Image"
            className="w-full h-full md:rounded-3xl"
          />
        </div>
        <div className="md:w-[50%] px-6 md:px-2">
          <h1
            className="mt-10 text-black font-bold text-2xl
          lg:text-3xl"
          >
            Bergabunglah dengan Komunitas FastTani
          </h1>
          <p
            className="leading-6 mt-4 lg:mt-8 text-sm text-[#00352ECC] md:pr-2 md:leading-6
          lg:text-base lg:leading-8 lg:pr-8"
          >
            Jadilah bagian dari komunitas petani yang dinamis dan kolaboratif
            dengan bergabung bersama FastTani di Agrofaster! Dengan mengklik
            tombol bergabung di bawah ini, Anda akan membuka pintu menuju akses
            eksklusif ke forum diskusi, sumber daya pertanian yang berharga, dan
            peluang bisnis yang menarik. Bergabung dengan kami adalah langkah
            pertama untuk terhubung dengan ribuan petani berpengalaman dari
            seluruh Indonesia, berbagi pengetahuan, mendapatkan dukungan, dan
            menemukan peluang baru. Isi formulir pendaftaran dengan informasi
            Anda, dan bersiaplah untuk memperluas jaringan Anda, meningkatkan
            keterampilan, dan menjalani perjalanan menuju kesuksesan dalam
            pertanian bersama FastTani!
          </p>
        </div>
      </section>
    </div>
  );
};

export default KomunitasAbout;
