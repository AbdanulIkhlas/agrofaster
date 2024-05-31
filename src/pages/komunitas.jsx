import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import KomunitasHome from "../components/layouts/Komunitas/KomunitasHome";
import KomunitasAbout from "../components/layouts/Komunitas/KomunitasAbout";

const Komunitas = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-jakartaSans">
      <Navbar />
      <main className="w-full font-jakartaSans min-h-[1500px] pb-20">
        {/* Section Home */}
        <section>
          <KomunitasHome />
        </section>
        {/* Section About */}
        <section id="about" className="pt-10">
          <KomunitasAbout />
        </section>
      </main>
      <Footer />
    </div>
  );
};

Komunitas.propTypes = {};

export default Komunitas;
