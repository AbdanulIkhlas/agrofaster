import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

const menus = [
  {
    link: "/",
    name: "Beranda",
    active: false,
  },
  {
    link: "/produk",
    name: "Produk",
    active: false,
  },
  {
    link: "/komunitas",
    name: "Komunitas FastTani",
    active: false,
  },
  {
    link: "/blog",
    name: "Blog",
    active: false,
  },
];

const Navbar = ({ user }) => {
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
        className={`h-[60px] flex justify-between items-center md:justify-between w-full fixed  ${
          isMenuOpen || scrolling
            ? "bg-white text-black"
            : "bg-transparent text-white"
        } top-0 z-50 px-5 transition-colors duration-300`}
      >
        <div className="flex items-center gap-1 flex-1  lg:flex-none lg:ps-10 ">
          <img src="../../images/logo.png" alt="" className="h-[25px]  " />
        </div>
        <WideContent user={user} />
        <div>{isMenuOpen && <SmallContent user={user} />}</div>
        <button
          className="block md:hidden transition-colors duration-300 "
          onClick={handleIsMenuOpen}
        >
          {isMenuOpen ? <IoClose size={30} /> : <IoIosMenu size={30} />}
        </button>
      </div>
    </nav>
  );
};

const WideContent = ({ user }) => {
  const location = useLocation();
  return (
    <div className="items-center font-normal hidden  md:flex md:justify-end  lg:w-full lg:justify-center">
      <div className="">
        <ul className="flex gap-10 text-[16px] font-medium  font-jakartaSans lg:text-[18px] ">
          {user ? (
            <>
              {menus.map((menu) => (
                <li key={menu.link}>
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
          ) : (
            <>
              {menus.map((menu) => (
                <li key={menu.link}>
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
          )}
        </ul>
      </div>
    </div>
  );
};

const SmallContent = ({ user }) => {
  const location = useLocation();
  return (
    <>
      <div className="lg:hidden block absolute top-[60px] w-full left-0 right-0 bg-white h-screen transition">
        <ul className="text-center text-xl mb-2 px-3">
          {user ? (
            <>
              {menus.map((menu) => (
                <Link key={menu.link} to={menu.link}>
                  <li
                    className={`my-4 py-3 hover:bg-primary hover:text-white rounded-md duration-300 cursor-pointer ${
                      location.pathname === menu.link
                        ? "text-white bg-primary"
                        : "text-dark bg-white"
                    }`}
                  >
                    {menu.name}
                  </li>
                </Link>
              ))}
            </>
          ) : (
            <>
              {menus.map((menu) => (
                <Link key={menu.link} to={menu.link}>
                  <li
                    className={`my-4 py-3 hover:bg-primary hover:text-white rounded-md duration-300 cursor-pointer ${
                      location.pathname === menu.link
                        ? "text-white bg-primary"
                        : "text-dark bg-white"
                    }`}
                  >
                    {menu.name}
                  </li>
                </Link>
              ))}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
