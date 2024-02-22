import React, {useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import Marquee from "./Marquee";

const Footer = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
    return () => {
      if (marqueeRef.current) {
        marqueeRef.current.stop();
      }
    };
  }, []);

  return (
    <>
      <Marquee ref={marqueeRef} text="ELEGANT LAMINATES" mTop></Marquee>
      <footer className="p-5 pt-10 flex flex-col sm:flex-wrap sm:flex-row sm:justify-between items-center w-full bg-[#16554a] relative pb-20">
        <img
          className="w-[200px] mb-5 sm:self-start grayscale"
          src="skydecor/logo/website logo.png"
          alt="logo"
        />
        <div className="links mb-8 sm:h-full sm:mb-0">
          <ul className="flex items-center gap-3 flex-col">
            <li className="text-2xl text-black font-sans font-black text">
              Links
            </li>
            <li className="text-lg font-normal text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg font-normal text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="text-lg font-normal text-white">
              <Link to="/categories">Categories</Link>
            </li>
            <li className="text-lg font-normal text-white">
              <Link to="/catalogue">Catalogue</Link>
            </li>
            <li className="text-lg font-normal text-white">
              <Link to="/event">Event</Link>
            </li>
            <li className="text-lg font-normal text-white">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="products mb-8 sm:h-full sm:mb-0">
          <ul className="flex items-center gap-3 flex-col">
            <li className="text-2xl text-black font-sans font-black text">
              Products
            </li>
            <li className="text-lg font-normal text-white">PVC Laminates</li>
            <li className="text-lg font-normal text-white">
              Decorative Laminates
            </li>
            <li className="text-lg font-normal text-white">
              Acrylic Laminates
            </li>
            <li className="text-lg font-normal text-white">Pre-Laminates</li>
            <li className="text-lg font-normal text-white">
              Acrylic Elegant Panels
            </li>
          </ul>
        </div>
        <div className="contact">
          <ul className="flex items-center gap-3 flex-col">
            <li className="text-2xl text-black font-sans font-black text">
              Contact
            </li>
            <li className="text-lg font-normal text-white">+1234567890</li>
            <li className="text-lg font-normal text-white">
              skydecor@gmail.com
            </li>
            <li className="text-zinc-400 font-normal text-center text-lg">
              Akshya Nagar 1st Block 1st Cross, <br /> Rammurthy nagar, <br />{" "}
              Bangalore-560016
            </li>
          </ul>
        </div>
      </footer>

      <div className="copyright w-full h-16 py-10 px-[3vw] bg-[#16554A] flex items-center justify-between border-t border-[#1e7667]">
          <p className="text-white">Copyright  &copy; 2024 | Skydecor</p>
          <p className="text-cyan-500 text-md">Terms of use | Privacy policy</p>
      </div>
    </>
  );
};

export default Footer;
