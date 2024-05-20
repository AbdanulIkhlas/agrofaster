import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoIosMenu, IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import PropTypes from "prop-types";

const fastTani = [
  {
    name: "Pasar Saprodi",
    link: "/Produk/fast-tani/saprodi",
  },
  {
    name: "Jual Panen",
    link: "/Produk/fast-tani/jual-panen",
  },
];

const SubNavbar = ({ page }) => {
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
        className={`h-[60px] mt-14 flex justify-between items-center md:justify-between w-full fixed border border-black 
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
        <WideContent page={page} />
        <div>{isMenuOpen && <SmallContent page={page} />}</div>
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

const WideContent = ({ page }) => {
  const location = useLocation();

  return (
    <div className="items-center font-normal hidden md:flex md:justify-end lg:w-full lg:justify-center">
      <div>
        <ul className="flex gap-10 text-[16px] font-medium font-jakartaSans lg:text-[16px]">
          {page === "fastTani" ? (
            <>
              {fastTani.map((menu) => (
                <li key={menu.link} className="relative">
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
                </li>
              ))}
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

const SmallContent = ({ page }) => {

  return (
    <div className="lg:hidden block absolute top-[60px] w-full left-0 right-0 bg-white h-screen transition">
      <ul className="text-center text-xl mb-2 px-3">
        {page === "fastTani" ? (
          <>
            {fastTani.map((menu) => (
              <li key={menu.link} className="relative">
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
              </li>
            ))}
          </>
        ) : null}
      </ul>
    </div>
  );
};

SubNavbar.propTypes = {
  page: PropTypes.string.isRequired,
};


export default SubNavbar;
