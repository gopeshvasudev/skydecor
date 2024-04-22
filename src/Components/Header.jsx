import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = () => {

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
        />
        <div
          className={`nav-right absolute top-14 left-0 right-2 p-5 lg:bg-transparent lg:static lg:block bg-[#16554a]`}
        >
          <ul className="lg:flex lg:items-center lg:gap-8">
            <li className="text-2xl mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link className="hover:border-b-[2px] pb-1 border-white" to="/">
                Home
              </Link>
            </li>
            <li className="text-2xl mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link className="hover:border-b-[2px] pb-1 border-white" to="/about">
                About
              </Link>
            </li>
            <li className="text-2xl mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link className="hover:border-b-[2px] pb-1 border-white" to="/categories">
                Categories
              </Link>
            </li>
            <li className="text-2xl mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link className="hover:border-b-[2px] pb-1 border-white" to="/catalogue">
                Catalogue
              </Link>
            </li>
            <li className="text-2xl mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link className="hover:border-b-[2px] pb-1 border-white" to="/event">
                Event
              </Link>
            </li>
            <li className="text-2xl mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link className="hover:border-b-[2px] pb-1 border-white" to="/contact">
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
