import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  function toggleHamburger() {
    setIsHamburgerActive(!isHamburgerActive);
  }

  function closeMenu() {
    if (isHamburgerActive) {
      setIsHamburgerActive(false);
    }
  }

  return (
    <header className="shadow-md fixed z-50 w-full backdrop-blur">
      <nav className="w-full h-[60px] flex items-center justify-between px-5">
        <div className="nav-left">
          <img
            src="skydecor/logo/website logo.png"
            alt=""
            className="w-[160px] grayscale"
          />
        </div>
        <IoMenu
          size="30px"
          className="lg:hidden text-white"
          onClick={toggleHamburger}
        />
        <div
          className={`${
            isHamburgerActive
              ? "nav-right absolute top-16 left-0 h-screen w-full p-5 flex flex-col items-center justify-start text-center bg-[#16554a]"
              : "p-5 bg-transparent hidden lg:block lg:static"
          }`}
        >
          <ul className="lg:flex lg:items-center lg:gap-8">
            <li className="text-2xl mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link
                className="hover:border-b-[2px] pb-1 border-white"
                to="/"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="text-2xl mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link
                className="hover:border-b-[2px] pb-1 border-white"
                to="/about"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="text-2xl mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link
                className="hover:border-b-[2px] pb-1 border-white"
                to="/categories"
                onClick={closeMenu}
              >
                Categories
              </Link>
            </li>
            <li className="text-2xl mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link
                className="hover:border-b-[2px] pb-1 border-white"
                to="/catalogue"
                onClick={closeMenu}
              >
                Catalogue
              </Link>
            </li>
            <li className="text-2xl mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link
                className="hover:border-b-[2px] pb-1 border-white"
                to="/event"
                onClick={closeMenu}
              >
                Event
              </Link>
            </li>
            <li className="text-2xl mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link
                className="hover:border-b-[2px] pb-1 border-white"
                to="/contact"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
