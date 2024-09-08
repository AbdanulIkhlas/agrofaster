import React, { useState } from "react";
import SplashScreen from "../components/fragments/SplashScreen";

const BeliHasilPanen = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false); // Menghilangkan splash screen setelah animasi selesai
  };

  return (
    <div className="relative w-full h-screen flex flex-col">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <main
        className={`transition-opacity duration-1000 ${
          showSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1>Selamat Datang di Halaman Beli Hasil Panen</h1>
        {/* Konten lainnya */}
      </main>
    </div>
  );
};

export default BeliHasilPanen;
