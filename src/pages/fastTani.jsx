import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import SubNavbar from "../components/fragments/SubNavbar";

const Beranda = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#7dff8c]">
      <Navbar />
      <SubNavbar page="fastTani" />
      <main className="w-full font-jakartaSans min-h-[1500px] pb-20"></main>
      <Footer />
    </div>
  );
};

export default Beranda;
