import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import BerandaHome from "../components/layouts/BerandaHome";
import BerandaService from "../components/layouts/BerandaService";
import BerandaAboutUs from "../components/layouts/BerandaAboutUs";
import BerandaPoweredBy from "../components/layouts/BerandaPoweredBy";
import BerandaCustomerService from "../components/layouts/BerandaCustomerService";

const Beranda = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full font-jakartaSans min-h-[1500px] pb-20">
        {/* SECTION 1 : HOME */}
        <BerandaHome/>
        {/* SECTION 2 : LAYANAN */}
        <BerandaService/> 
        {/* SECTION 3 : ABOUT US */}
        <BerandaAboutUs/> 
        {/* SECTION 4 : POWERED BY */}
        <BerandaPoweredBy/>
        {/* SECTION 5 : CUSTOMER SERVICE */}
        <BerandaCustomerService/>
      </main>
      <Footer />
    </div>
  );
};

export default Beranda;
