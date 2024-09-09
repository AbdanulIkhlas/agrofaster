import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, name2, weight, price, page }) => {
  // Menentukan URL berdasarkan nilai page
  const linkTo =
    page === "saprodi"
      ? `/produk/fast-tani/saprodi/detail-produk-saprodi/${id}`
      : page === "konsumen"
      ? `/produk/konsumen/beli-hasil-panen/detail-produk/${id}`
      : null;

  return (
    <Link to={linkTo}>
      <div className="w-[150px] bg-[#F0F0F0] rounded-lg p-[5px] pb-3 border border-gray-300 md:w-[175px] md:p-2 md:pb-4">
        <div className="w-full h-[136px] overflow-hidden rounded-lg bg-white">
          <img src={image} alt="Image Produk" className="w-full bg-cover" />
        </div>
        {page === "saprodi" ? (
          <>
            <p className="mt-3 text-[14px] md:text-[16px]">{name}</p>
            <p className="text-[14px] md:text-[16px]">{name2}</p>
            <p className="text-[14px] md:text-[16px]">{weight}</p>
          </>
        ) : page === "konsumen" ? (
          <>
            <p className="mt-3 text-[14px] md:text-[16px]">{name}</p>
          </>
        ) : null}
        <h1 className="font-semibold mt-2 text-lg md:text-xl">Rp {price}</h1>
      </div>
    </Link>
  );
};

export default ProductCard;
