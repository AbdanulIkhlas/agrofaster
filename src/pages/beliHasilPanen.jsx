import React, { useState, useEffect } from "react";
import SplashScreen from "../components/fragments/SplashScreen";
import NavbarWebApp from "../components/fragments/NavbarWebApp";
import Searching from "../components/fragments/Searching";
import InfoDiscountCard from "../components/fragments/InfoDiscountCard";
import { infoDiscount } from "../data/infoDiscount";
import Caraousel from "../components/fragments/Caraousel";
import { kategoriKonsumen } from "../data/kategoriKonsumen";
import KategoryCard from "../components/fragments/KategoryCard";

const BeliHasilPanen = () => {
  // Cek apakah splash screen sudah pernah ditampilkan sebelumnya
  const [showSplash, setShowSplash] = useState(() => {
    const splashShown = localStorage.getItem("splashShown");
    return splashShown !== "true"; // Jika belum pernah ditampilkan, set true
  });

  const handleSplashFinish = () => {
    setShowSplash(false); // Menghilangkan splash screen setelah animasi selesai
    localStorage.setItem("splashShown", "true"); // Menyimpan status bahwa splash screen sudah ditampilkan
  };

  useEffect(() => {
    const splashShown = localStorage.getItem("splashShown");
    if (splashShown === "true") {
      setShowSplash(false); // Jangan tampilkan splash jika sudah pernah ditampilkan
    }
  }, []);

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
        <section className="w-full mt-[26px] rounded-t-[32px] px-5 py-1 h-full bg-white">
          {/* SEARCHING */}
          <Searching />
          {/* DISKON INFORMATION */}
          <Caraousel
            data={infoDiscount}
            srcLeftButtonPath={`../../svg/left-arrow.svg`}
            srcRightButtonPath={`../../svg/right-arrow.svg`}
            chooseFragment="diskon"
          />
          {/* KATEGORi */}
          <h1 className="font-semibold text-lg mt-1">Kategori</h1>
          <div className="flex  gap-4 mt-2 overflow-auto">
            {kategoriKonsumen.map((item) => (
              <div key={item.id} className="">
                <KategoryCard {...item} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BeliHasilPanen;
