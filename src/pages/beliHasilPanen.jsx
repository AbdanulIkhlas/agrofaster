import UnderDevelopment from "../components/fragments/UnderDevelopment";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";

const BeliHasilPanen = () => {
  return (
    <div className="w-full h-screen flex flex-col ">
      <Navbar />
      <main className="flex flex-col items-center min-h-[800px] bg-shadowGreenn">
        <UnderDevelopment />
        <section className="w-[140px] mt-14"></section>
      </main>
      <Footer />
    </div>
  );
};

export default BeliHasilPanen;
