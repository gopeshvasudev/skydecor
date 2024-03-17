import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(true);

  const showNavRight = () => {
    setActive((current) => !current);
  };

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
          onClick={showNavRight}
          size="30px"
          className="lg:hidden text-white"
        />
        <div
          className={`nav-right absolute top-14 left-0 right-2 p-5 lg:bg-transparent lg:static lg:block bg-[#16554a] ${
            active ? "hidden h-0 overflow-hidden" : "block w-full h-[100vh] overflow-auto"
          }`}
        >
          <ul className="lg:flex lg:items-center lg:gap-8">
            <li className="text-2xl lg:hover:border-b-2 border-[#16554A] mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link className="hover:border-b-2 border-white" to="/" onClick={showNavRight}>
                Home
              </Link>
            </li>
            <li className="text-2xl lg:hover:border-b-2 border-[#16554A] mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link className="hover:border-b-2 border-white" to="/about" onClick={showNavRight}>
                About
              </Link>
            </li>
            <li className="text-2xl lg:hover:border-b-2 border-[#16554A] mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link className="hover:border-b-2 border-white" to="/categories" onClick={showNavRight}>
                Categories
              </Link>
            </li>
            <li className="text-2xl lg:hover:border-b-2 border-[#16554A] mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link className="hover:border-b-2 border-white" to="/catalogue" onClick={showNavRight}>
                Catalogue
              </Link>
            </li>
            <li className="text-2xl lg:hover:border-b-2 border-[#16554A] mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link className="hover:border-b-2 border-white" to="/event" onClick={showNavRight}>
                Event
              </Link>
            </li>
            <li className="text-2xl lg:hover:border-b-2 border-[#16554A] mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link className="hover:border-b-2 border-white" to="/contact" onClick={showNavRight}>
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
