import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import BerandaHome from "../components/layouts/BerandaHome";
import BerandaService from "../components/layouts/BerandaService";

const Beranda = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full font-jakartaSans min-h-[1300px]">
        {/* SECTION 1 : HOME */}
        <BerandaHome/>
        {/* SECTION 2 : LAYANAN */}
        <BerandaService/> 
      </main>
      <Footer />
    </div>
  );
};

export default Beranda;
