import React from "react";
import { Link } from "react-router-dom";

const KategoryCard = ({ id, image, kategori, link }) => {
  return (
    <Link to={`kategori/${id}`}>
      <div className="flex gap-4 py-3 px-2 w-max font-jakartaSans items-center rounded-[10px] bg-[#2c946c5b]">
        <h1 className="text-lg">{kategori}</h1>
        <img
          src={image}
          alt="image"
          className="w-[45px] rounded border border-gray-400"
        />
      </div>
    </Link>
  );
};

export default KategoryCard;
