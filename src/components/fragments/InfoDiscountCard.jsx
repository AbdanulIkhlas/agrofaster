import React from "react";

const InfoDiscountCard = ({ image, title, description}) => {
  return (
    <div className="flex gap-7 font-jakartaSans items-center w-full mt-5 rounded-[10px] bg-[#2c946c5b] py-5 px-10">
      <img
        src={image}
        alt="image"
        className="w-[70px] rounded border border-gray-600"
      />
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
        <h3 className="mt-1">{description}</h3>
      </div>
    </div>
  );
};

export default InfoDiscountCard;
