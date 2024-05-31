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
    path: "/produk/konsumen",
    element: <Konsumen />,
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
