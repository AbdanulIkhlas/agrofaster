import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import BerandaHome from "../components/layouts/Beranda/BerandaHome";
import BerandaService from "../components/layouts/Beranda/BerandaService";
import BerandaAboutUs from "../components/layouts/Beranda/BerandaAboutUs";
import BerandaPoweredBy from "../components/layouts/Beranda/BerandaPoweredBy";
import BerandaCustomerService from "../components/layouts/Beranda/BerandaCustomerService";
import BerandaTestimoni from "../components/layouts/Beranda/BerandaTestimoni";

const Beranda = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full font-jakartaSans min-h-[1500px] pb-20">
        {/* SECTION 1 : HOME */}
        <section id="home">
          <BerandaHome />
        </section>
        {/* SECTION 2 : LAYANAN */}
        <section id="service" className="pt-10">
          <BerandaService />
        </section>
        {/* SECTION 3 : ABOUT US */}
        <section id="about" className="pt-10 md:pt-16 lg:pt-10">
          <BerandaAboutUs />
        </section>
        {/* SECTION 4 : POWERED BY */}
        <section id="powered" className="pt-10">
          <BerandaPoweredBy />
        </section>
        {/* SECTION 5 : CUSTOMER SERVICE */}
        <section id="customer" className="pt-6">
          <BerandaCustomerService />
        </section>
        {/* SECTION 6 : TESTIMONI */}
        <section id="testimoni" className="pt-16">
          <BerandaTestimoni />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Beranda;
