import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { IoIosMenu, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const fastTaniList = [
  {
    link: "./pasar-saprodi",
    name: "Pasar Saprodi",
    active: false,
  },
  {
    link: "./jual-tani",
    name: "Jual Tani",
    active: false,
  },
];

const SubNavbar = ({ page }) => {
  SubNavbar.PropTypes = {
    page: PropTypes.string,
  };

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
        className={`h-[60px] mt-[60px] py-5 flex justify-between items-center md:justify-between w-full fixed 
        ${
          isMenuOpen || scrolling
            ? "bg-white text-black border-t border-gray-300"
            : "bg-transparent text-white"
        } 
        top-0 z-50 px-5 transition-colors duration-300`}
      >
        <div className="flex items-center text-base font-semibold gap-1 flex-1 lg:flex-none lg:ps-10 ">
          {page === "fastTani" ? <p>Produk / Fast Tani</p> : <p>Konsumen</p>}
        </div>
        <WideContent isMenuOpen={isMenuOpen} />
        <div>{isMenuOpen && <SmallContent />}</div>
        <button
          className="block md:hidden transition-colors duration-300"
          onClick={handleIsMenuOpen}
        >
          {isMenuOpen ? (
            <IoIosArrowUp size={30} />
          ) : (
            <IoIosArrowDown size={30} />
          )}
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
    <div className="items-center font-normal hidden md:flex md:justify-end lg:w-full lg:justify-end lg:px-20 ">
      <div>
        <ul className="flex gap-10 text-[16px] font-medium font-jakartaSans lg:text-[16px]">
          {fastTaniList.map((menu, index) => (
            <li key={menu.link} className="relative">
              {menu.haveSubMenu ? (
                <>
                  <button
                    className={`flex items-center gap-2 ${
                      location.pathname === menu.link
                        ? "text-primary"
                        : "text-dark"
                    } hover:text-primary duration-300 transition cursor-pointer`}
                    onClick={() => toggleSubMenu(index)}
                  >
                    {menu.name}
                    {activeSubMenu === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </button>
                  {activeSubMenu === index && (
                    <ul className="absolute left-0 mt-2 w-[200px] bg-white shadow-lg rounded-lg py-2">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/sub-link-1">Sub Link 1</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/sub-link-2">Sub Link 2</Link>
                      </li>
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

  return (
    <div className="lg:hidden block absolute z-10 top-[60px] w-full left-0 right-0 bg-white transition">
      <ul className="text-center text-xl mb-2 px-3">
        {fastTaniList.map((menu) => (
          <li key={menu.link} className="relative">
            {menu.haveSubMenu ? (
              <>
                <div
                  className={`flex items-center justify-between text-left px-4 my-1 py-4 hover:bg-primary hover:text-white rounded-md duration-300 cursor-pointer ${
                    location.pathname === menu.link
                      ? "text-white bg-primary"
                      : "text-dark bg-white"
                  }`}
                >
                  {menu.name}
                </div>
              </>
            ) : (
              <div
                className={`flex items-center justify-between text-left px-4 my-1 py-4 hover:bg-primary hover:text-white rounded-md duration-300 cursor-pointer ${
                  location.pathname === menu.link
                    ? "text-white bg-primary"
                    : "text-dark bg-white"
                }`}
              >
                <Link to={menu.link}>{menu.name}</Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNavbar;
