import React from "react";
import { Link } from "react-router-dom";

const KategoryCard = ({ id, image, kategori, page }) => {
  const linkTo =
    page === "saprodi"
      ? `/produk/fast-tani/saprodi/kategori-saprodi/${kategori}`
      : page === "konsumen"
      ? `/produk/konsumen/beli-hasil-panen/kategori/${kategori}`
      : null;

  return (
    <Link to={`${linkTo}`}>
      <div className="flex gap-4 py-3 px-2 w-max font-jakartaSans items-center rounded-[10px] bg-[#2c946c5b]">
        <h1 className="text-lg">{kategori}</h1>
        <img
          src={image}
          alt="image"
          className="w-[45px] rounded border border-gray-400 bg-white"
        />
      </div>
    </Link>
  );
};

export default KategoryCard;
