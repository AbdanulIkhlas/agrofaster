import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import SubNavbar from "../components/fragments/SubNavbar";
import KonsumenHome from "../components/layouts/Konsumen/KonsumenHome";

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
      </main>
      <Footer />
    </div>
  );
};

export default Konsumen;
