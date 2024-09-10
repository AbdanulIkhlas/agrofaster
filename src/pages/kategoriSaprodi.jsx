import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Searching from "../components/fragments/Searching";
import { allItemSaprodi } from "../data/allItemSaprodi";
import ProductCard from "../components/fragments/ProductCard";

const kategoriSaprodi = () => {
  // Tangkap id dari URL
  const { id } = useParams(); // ID kategori yang diambil dari URL
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBackClick = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  // Filter produk berdasarkan kategori dari URL (id)
  const filteredByCategory = allItemSaprodi.filter(
    (item) => item.category && item.category.toLowerCase() === id.toLowerCase()
  );

  // Filter produk berdasarkan pencarian dan kategori
  const filteredItems = filteredByCategory.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-[40px] px-5 pb-10 min-h-screen md:w-[425px] md:mx-auto md:border-l md:border-r md:border-black ">
      <button onClick={handleBackClick}>
        <img src="../../../../../svg/back.svg" alt="Back" />
      </button>
      <h1 className="text-xl font-semibold mt-2">{id}</h1>

      {/* SEARCHING */}
      <Searching searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* KONTEN BERDASARKAN INPUT PENCARIAN */}
      {searchQuery === "" ? (
        <div className="transition-all mt-6 duration-500 ease-in-out transform opacity-100 scale-100">
          <div className="grid grid-cols-2 gap-4 mt-2 justify-items-center">
            {filteredByCategory.length > 0 ? (
              filteredByCategory.map((item) => (
                <ProductCard {...item} page="saprodi" />
              ))
            ) : (
              <p className="text-center col-span-2 text-gray-500">
                Tidak ada produk dalam kategori ini.
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="transition-all duration-500 ease-in-out transform opacity-100 scale-100">
          <h1 className="font-semibold text-lg mt-5">Hasil Pencarian</h1>
          <div className="grid grid-cols-2 gap-4 mt-2 justify-items-center">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <ProductCard {...item} page="saprodi" />
              ))
            ) : (
              <p className="text-center col-span-2 text-gray-500">
                Tidak ada produk yang cocok.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default kategoriSaprodi;
