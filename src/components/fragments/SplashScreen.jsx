import React, { useState, useEffect } from "react";
import "../../assets/css/SplashScreen.css"; // Import file CSS yang berisi keyframes dan animasi tambahan

const SplashScreen = ({ onFinish }) => {
  const [showFirstImage, setShowFirstImage] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const runAnimation = async () => {
      setShowFirstImage(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // delay 2 detik untuk logo pertama
      setShowSecondImage(true);
      await new Promise((resolve) => setTimeout(resolve, 3000)); // delay 3 detik sebelum splash hilang
      onFinish(); // Mengakhiri splash screen dan menampilkan main
    };

    runAnimation();
  }, [onFinish]);

  return (
    <div className="absolute z-50 w-full h-full flex items-center justify-center bg-edgewater">
      <div className="flex flex-col items-center p-4">
        {showFirstImage && (
          <img
            src="../../../public/images/agrofasterLogoSplash.png"
            alt="Logo"
            className="w-[200px] -mt-10 transition-opacity duration-700 ease-in-out opacity-100"
          />
        )}
        {showSecondImage && (
          <img
            src="../../../public/images/agrofasterTextSplash.png"
            alt="Text"
            className="w-[200px] -mt-5 fade-in-bounce" // Menambahkan kelas untuk animasi bounce dan fade-in
          />
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
