import React from "react";
import {Link} from "react-router-dom";

const ProductCard = ({id, image, name, price }) => {
  return (
    <Link to={`./detail-produk/${id}`}>
      <div className="w-[150px] bg-[#F0F0F0] rounded-lg p-[5px] pb-3 border border-gray-300">
        <div className="w-full h-[86px] overflow-hidden rounded-lg">
          <img src={image} alt="Image Produk" className="w-full bg-cover" />
        </div>
        <p className="mt-3 text-[14px]">{name}</p>
        <h1 className="font-semibold mt-2 text-lg">Rp {price}</h1>
      </div>
    </Link>
  );
};

export default ProductCard;
