import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allItemKonsumen } from "../data/allItemKonsumen";

const DetailProduk = () => {
  // Tangkap id dari URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Temukan produk berdasarkan id
  // Pastikan id dalam allItemKonsumen dan id dari URL cocok dalam tipe data
  const product = allItemKonsumen.find((item) => item.id.toString() === id);

  // Jika produk tidak ditemukan
  if (!product) {
    return <p>Produk dengan ID {id} tidak ditemukan.</p>;
  }

  const { image, name, price, detail } = product;

  const handleBackClick = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  return (
    <div className="relative pt-[40px] px-5 pb-10 min-h-screen md:w-[425px] md:mx-auto md:border-l md:border-r md:border-black ">
      <button onClick={handleBackClick}>
        <img src="../../../../../svg/back.svg" alt="Back" />
      </button>
      <h1 className="text-xl font-semibold mt-2 mb-4">Detail</h1>
      <div className="pb-16">
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt={name}
            className="w-full h-auto max-w-md rounded-lg shadow-md"
          />
          <div className="w-full">
            <h1 className="text-2xl font-bold mt-4">{name}</h1>
            <p className="text-lg text-green-600">Rp {price}</p>
          </div>
          <p className="text-gray-600 mt-4 text-justify">{detail}</p>
        </div>
      </div>
      {/* Tombol Pesan */}
      <div className="fixed bottom-5 right-0 w-full flex justify-center">
        <a
          href={`https://wa.me/6282242719909?text=${encodeURIComponent(
            `Hallo Saya ingin beli ${name}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-[90%] justify-center items-center gap-2 
          bg-primary text-white p-3 rounded-xl shadow-lg
           hover:bg-green-600 transition-colors md:w-[390px]"
        >
          {/* <img src="../../../../../svg/whatsapp.svg" alt="Whatsapp" /> */}
          <p className="text-lg">Pesan</p>
        </a>
      </div>
    </div>
  );
};

export default DetailProduk;
