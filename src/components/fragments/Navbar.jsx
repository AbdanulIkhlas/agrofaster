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

const Navbar = () => {
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
        className={`h-[60px] flex justify-between items-center md:justify-between w-full fixed  lg:px-20
        ${
          isMenuOpen || scrolling
            ? "bg-white text-black"
            : "bg-transparent text-white"
        } 
        top-0 z-50 px-5 transition-colors duration-300`}
      >
        <div className="flex items-center gap-1 flex-1 lg:flex-none lg:ps-10">
          <img src="../../images/logo.png" alt="" className="h-[25px]" />
        </div>
        <WideContent />
        <div>{isMenuOpen && <SmallContent />}</div>
        <button
          className="block md:hidden transition-colors duration-300"
          onClick={handleIsMenuOpen}
        >
          {isMenuOpen ? <IoClose size={30} /> : <IoIosMenu size={30} />}
        </button>
      </div>
    </nav>
  );
};

const WideContent = () => {
  const location = useLocation();
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <div className="items-center font-normal hidden md:flex md:justify-end lg:w-full lg:justify-center">
      <div>
        <ul className="flex gap-10 text-[16px] font-medium font-jakartaSans lg:text-[16px]">
          {menus.map((menu, index) => (
            <li key={menu.link} className="relative">
              {menu.haveSubMenu ? (
                <>
                  <button
                    className={`flex items-center gap-2 ${
                      location.pathname === menu.link
                        ? "text-primary"
                        : "text-dark"
                    } hover:text-primary duration-300 transition cursor-pointer`}
                    onClick={() =>
                      menu.haveSubMenu ? toggleSubMenu(index) : null
                    }
                  >
                    <Link to={menu.link}>{menu.name}</Link>
                    {menu.haveSubMenu &&
                      (activeSubMenu === index ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      ))}
                  </button>
                  {menu.haveSubMenu && activeSubMenu === index && (
                    <ul
                      className={`absolute z-50 left-0 mt-2 bg-white shadow-lg w-48 text-black transition-transform transform scale-95 origin-top-left duration-300 ease-in-out 
                        md:-left-24 md:top-[34px] lg:left-0
                      ${activeSubMenu === index ? "scale-100" : "scale-95"}`}
                    >
                      {(menu.name === "Produk"
                        ? produkSubMenu
                        : artikelSubMenu
                      ).map((subMenu) => (
                        <li
                          key={subMenu.link}
                          className="px-4 py-2 hover:bg-gray-100 duration-300"
                        >
                          <Link to={subMenu.link} className="block">
                            <p>{subMenu.name}</p>
                            <p className="text-gray-400 text-sm">
                              {subMenu.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={menu.link}
                  className={`${
                    location.pathname === menu.link
                      ? "text-primary "
                      : "text-dark"
                  } hover:text-primary duration-300 transition cursor-pointer`}
                >
                  {menu.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
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
    <div className="lg:hidden block absolute z-50 top-[60px] w-full left-0 right-0 bg-white h-screen transition">
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
              <Link to={menu.link}>
              {menu.name}
              </Link>
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

export default Navbar;
