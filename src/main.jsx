import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Beranda from "./pages/beranda";
import Blog from "./pages/blog";
import Event from "./pages/event";
import FastTani from "./pages/fastTani";
import Konsumen from "./pages/konsumen";
import Komunitas from "./pages/komunitas";
import Saprodi from "./pages/saprodi";
import JualHasilPanen from "./pages/jualHasilPanen"; 
import BeliHasilPanen from "./pages/beliHasilPanen";
import Kategori from "./pages/kategori";
import DetailProduk from "./pages/detailProduk";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/artikel/blog",
    element: <Blog />,
  },
  {
    path: "/artikel/event",
    element: <Event />,
  },
  {
    path: "/produk/fast-tani",
    element: <FastTani />,
  },
  {
    path: "/produk/fast-tani/saprodi",
    element: <Saprodi />,
  },
  {
    path: "/produk/fast-tani/jual-hasil-panen",
    element: <JualHasilPanen />,
  },
  {
    path: "/produk/konsumen",
    element: <Konsumen />,
  },
  {
    path: "/produk/konsumen/beli-hasil-panen",
    element: <BeliHasilPanen />,
  },
  {
    path: "/komunitas",
    element: <Komunitas />,
  },
  {
    path: "/produk/konsumen/beli-hasil-panen/kategori/:id",
    element: <Kategori />,
  },
  {
    path: "/produk/konsumen/beli-hasil-panen/detail-produk/:id",
    element: <DetailProduk />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
