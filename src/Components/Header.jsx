import React from "react";
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
        <IoMenu size="30px" className="lg:hidden text-white" />
        <div className="nav-right absolute top-20 right-2 p-5 bg-cyan-600 hidden lg:bg-transparent lg:static lg:block">
          <ul className="lg:flex lg:items-center lg:gap-8">
            <li className="text-2xl hover:border-b-2 border-[#16554A] mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link to="/">Home</Link>
            </li>
            <li className="text-2xl hover:border-b-2 border-[#16554A] mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link to="/about">About</Link>
            </li>
            <li className="text-2xl hover:border-b-2 border-[#16554A] mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link to="/categories">Categories</Link>
            </li>
            <li className="text-2xl hover:border-b-2 border-[#16554A] mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link to="/catalogue">Catalogue</Link>
            </li>
            <li className="text-2xl hover:border-b-2 border-[#16554A] mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link to="/event">Event</Link>
            </li>
            <li className="text-2xl hover:border-b-2 border-[#16554A] mb-5 lg:mb-0 lg:text-xl font-normal text-zinc-100">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
