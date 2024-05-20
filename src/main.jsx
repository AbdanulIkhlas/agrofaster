import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Beranda from "./pages/beranda";
import Artikel from "./pages/produk";
import Produk from "./pages/produk";
import Komunitas from "./pages/komunitas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/artikel",
    element: <Artikel />,
  },
  {
    path: "/produk",
    element: <Produk />,
  },
  {
    path: "/komunitas",
    element: <Komunitas />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
