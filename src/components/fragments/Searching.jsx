import React from "react";

const Searching = () => {
  return (
    <div
      className={`flex gap-2 mt-5 h-[50px] p-2 px-3 border border-gray-400 rounded-lg transition-colors duration-300 focus-within:outline-none focus-within:border-gray-800`}
    >
      <img
        src="../../../public/svg/search.svg"
        alt="search icon"
        className="w-[20px]"
      />
      <input
        type="text"
        className="w-full h-full outline-none text-gray-500"
        placeholder="Cari.."
      />
    </div>
  );
};

export default Searching;
