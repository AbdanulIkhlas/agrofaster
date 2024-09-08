import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Kategori = () => {
  // Tangkap id dari URL
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  return (
    <div>
      <button onClick={handleBackClick}>
        <img src="../../../../../svg/back.svg" alt="Back" />
      </button>
      <h1>Kategori</h1>
      <p>ID Kategori: {id}</p>
    </div>
  );
};

export default Kategori;
