import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import SubNavbar from "../components/fragments/SubNavbar";
import FastTaniHome from "../components/layouts/FastTani/FastTaniHome";
import FastTaniAbout from "../components/layouts/FastTani/FastTaniAbout";

const FastTani = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#effff1]">
      <div className="absolute z-[99]"><Navbar /></div>
      <div className="absolute z-[60]"><SubNavbar page="fastTani" /></div>
      <main className="w-full font-jakartaSans min-h-[1500px] pb-20">
        {/* section home */}
        <section id="home">
          <FastTaniHome />
        </section>
        {/* section about */}
        <section id="about">
          <FastTaniAbout />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FastTani;
