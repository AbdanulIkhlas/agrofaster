import React, { useState } from "react";
import SplashScreen from "../components/fragments/SplashScreen";
import NavbarWebApp from "../components/fragments/NavbarWebApp";
import Searching from "../components/fragments/Searching";
import InfoDiscountCard from "../components/fragments/InfoDiscountCard";
import { infoDiscount } from "../data/infoDiscount";
import Caraousel from "../components/fragments/Caraousel";

const BeliHasilPanen = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false); // Menghilangkan splash screen setelah animasi selesai
  };

  return (
    <div className="relative w-full h-screen flex flex-col font-jakartaSans">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <main
        className={`transition-opacity duration-1000 bg-primary h-full w-full ${
          showSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        <NavbarWebApp />
        <div className="text-white font-bold text-xl mt-20 px-5">
          <h1>Temukan Hasil Panen</h1>
          <h1>Berkualitas Tinggi</h1>
        </div>

        {/* ITEM CONTENT CONTAINER */}
        <section className="w-full mt-[26px] rounded-t-[32px] px-5 min-h-[520px] bg-white border border-black">
          {/* SEARCHING */}
          <Searching />
          {/* DISKON INFORMATION */}
          <Caraousel
            data={infoDiscount}
            srcLeftButtonPath={`../../svg/left-arrow.svg`}
            srcRightButtonPath={`../../svg/right-arrow.svg`}
            chooseFragment="diskon"
          />
        </section>
      </main>
    </div>
  );
};

export default BeliHasilPanen;
