import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import BerandaHome from "../components/layouts/BerandaHome";
import BerandaService from "../components/layouts/BerandaService";
import BerandaAboutUs from "../components/layouts/BerandaAboutUs";

const Beranda = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full font-jakartaSans min-h-[1500px] pb-20">
        {/* SECTION 1 : HOME */}
        <BerandaHome/>
        {/* SECTION 2 : LAYANAN */}
        <BerandaService/> 
        {/* SECTION 2 : ABOUT US */}
        <BerandaAboutUs/> 
      </main>
      <Footer />
    </div>
  );
};

export default Beranda;
