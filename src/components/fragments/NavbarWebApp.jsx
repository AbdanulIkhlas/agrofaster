import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoIosMenu, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const menus = [
  {
    link: "/",
    name: "Beranda",
    active: false,
    haveSubMenu: false,
  },
  {
    name: "Produk",
    active: false,
    haveSubMenu: true,
  },
  {
    link: "/komunitas",
    name: "Komunitas FastTani",
    active: false,
    haveSubMenu: false,
  },
  {
    name: "Artikel",
    active: false,
    haveSubMenu: true,
  },
];

const produkSubMenu = [
  {
    link: "/produk/fast-tani",
    name: "Fast Tani",
    description: "Solusi Untuk Petani",
    active: false,
  },
  {
    link: "/produk/konsumen",
    name: "Konsumen",
    active: false,
  },
];

const artikelSubMenu = [
  {
    link: "/artikel/blog",
    name: "Blog",
    active: false,
  },
  {
    link: "/artikel/event",
    name: "Event",
    active: false,
  },
];

const NavbarWebApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="top-0">
      <div
        className={`h-[60px] flex justify-between items-center md:w-[425px] w-full fixed
      ${
        isMenuOpen || scrolling
          ? "bg-white text-black"
          : "bg-transparent text-white"
      } 
      top-0 z-50 px-5 transition-colors duration-300`}
      >
        <div className="flex items-center gap-1 flex-1">
          {/* Tampilkan logo putih atau hitam berdasarkan isMenuOpen */}
          {isMenuOpen ? (
            <img
              src="../../images/logo.png"
              alt="Logo hijau"
              className="h-[25px]"
            />
          ) : (
            <img
              src="../../images/logo-putih.png"
              alt="Logo Putih"
              className="w-[180px] -ml-5 -mt-2"
            />
          )}
        </div>
        <div>{isMenuOpen && <SmallContent />}</div>
        <button
          className="block transition-colors duration-300"
          onClick={handleIsMenuOpen}
        >
          {isMenuOpen ? <IoClose size={30} /> : <IoIosMenu size={30} />}
        </button>
      </div>
    </nav>
  );
};

const SmallContent = () => {
  const location = useLocation();
  const [isProdukSubMenuOpen, setIsProdukSubMenuOpen] = useState(false);
  const [isArtikelSubMenuOpen, setIsArtikelSubMenuOpen] = useState(false);

  const handleProdukSubMenuOpen = () => {
    setIsProdukSubMenuOpen(!isProdukSubMenuOpen);
  };

  const handleArtikelSubMenuOpen = () => {
    setIsArtikelSubMenuOpen(!isArtikelSubMenuOpen);
  };

  return (
    <div className="block absolute z-50 top-[60px] w-full left-0 right-0 bg-white h-screen transition">
      <ul className="text-center text-xl mb-2 px-3">
        {menus.map((menu) => (
          <li key={menu.link} className="relative  ">
            <div
              className={`flex items-center justify-between text-left px-4 my-1 py-4 hover:bg-primary hover:text-white rounded-md duration-300 cursor-pointer ${
                location.pathname === menu.link
                  ? "text-white bg-primary"
                  : "text-dark bg-white"
              }`}
              onClick={
                menu.haveSubMenu
                  ? menu.name === "Produk"
                    ? handleProdukSubMenuOpen
                    : handleArtikelSubMenuOpen
                  : null
              }
            >
              <Link to={menu.link}>{menu.name}</Link>
              {menu.haveSubMenu && (
                <>
                  {menu.name === "Produk" ? (
                    isProdukSubMenuOpen ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )
                  ) : isArtikelSubMenuOpen ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </>
              )}
            </div>
            {menu.haveSubMenu && menu.name === "Produk" && (
              <ul
                className={`pl-8 overflow-hidden duration-500 ease-in-out  ${
                  isProdukSubMenuOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                {produkSubMenu.map((subMenu) => (
                  <li key={subMenu.link} className="my-1 ">
                    <Link
                      to={subMenu.link}
                      className={`block py-1 px-2 text-left hover:bg-primary hover:text-white rounded-md duration-300 ${
                        location.pathname === subMenu.link
                          ? "text-white bg-primary"
                          : "text-dark bg-white"
                      }`}
                    >
                      <p>{subMenu.name}</p>
                      <p className="text-gray-400 text-sm">
                        {subMenu.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {menu.haveSubMenu && menu.name === "Artikel" && (
              <ul
                className={`pl-8 overflow-hidden duration-500 ease-in-out ${
                  isArtikelSubMenuOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                {artikelSubMenu.map((subMenu) => (
                  <li key={subMenu.link} className="my-1 ">
                    <Link
                      to={subMenu.link}
                      className={`block py-1 px-2 text-left hover:bg-primary hover:text-white rounded-md duration-300 ${
                        location.pathname === subMenu.link
                          ? "text-white bg-primary"
                          : "text-dark bg-white"
                      }`}
                    >
                      {subMenu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarWebApp;