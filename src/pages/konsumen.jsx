import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import SubNavbar from "../components/fragments/SubNavbar";
import KonsumenHome from "../components/layouts/Konsumen/KonsumenHome";
import KonsumenAbout from "../components/layouts/Konsumen/KonsumenAbout";
import KonsumenPartner from "../components/layouts/Konsumen/KonsumenPartner";
import KonsumenHowTo from "../components/layouts/Konsumen/KonsumenHowTo";

const Konsumen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-jakartaSans">
      <div className="absolute z-[99]">
        <Navbar />
      </div>
      <div className="absolute z-[60]">
        <SubNavbar page="konsumen" />
      </div>
      <main className="w-full font-jakartaSans min-h-[1500px] pb-20">
        {/* section home */}
        <section id="home">
          <KonsumenHome />
        </section>
        {/* section about */}
        <section id="about">
          <KonsumenAbout />
        </section> 
        {/* section partner */}
        <section id="partner">
          <KonsumenPartner />
        </section>
        {/* section how to buy  */}
        <section id="howTo">
          <KonsumenHowTo />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Konsumen;
