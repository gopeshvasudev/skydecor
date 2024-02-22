import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import React, { useRef, useEffect, useState } from "react";

const Catalogue = () => {
  const locomotiveScrollRef = useRef(null);
  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll();
    return () => {
      locomotiveScrollRef.current.destroy();
    };
  }, []);

  const [inputValue, setInputValue] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
  });

  const handleInputValue = function (e) {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    console.log(inputValue);
  };

  return (
    <>
      <div>
        <section className="page1 w-full min-h-screen flex flex-col justify-evenly md:justify-normal lg:flex-row pt-[60px] bg-[#040D12]">
          <section className="inner w-full lg:w-1/2 md:h-screen h-1/2 text-white flex items-center justify-center flex-col gap-5">
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              className="sm:text-5xl capitalize text-3xl text-center"
            >
              Check out our
            </motion.h2>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              className="sm:text-7xl text-5xl text-center"
            >
              New Catalogue
            </motion.h1>
          </section>
          <section className="inner w-full lg:w-1/2 h-full grid place-items-center px-2 sm:px-5 md:px-10">
            <div className="image-box w-full h-4/5 bg-green-500 rounded-full overflow-hidden border-4">
              <motion.img
                initial={{ scale: 1, filter: "grayscale(70%)" }}
                whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
                transition={{ duration: 0.5 }}
                src="skydecor/homepage/homepage1.png"
                alt="image"
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </section>
        </section>
        <section className="page2 w-full min-h-screen flex md:flex-row flex-col bg-[#040d12] text-white">
          <div className="page2-left w-full md:w-1/2 md:h-screen h-1/2 flex items-center justify-center flex-col gap-3 p-2">
            <motion.h1
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-4xl md:text-6xl text-cyan-400"
            >
              Download now
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center text-md md:text-xl md:w-4/5 text-zinc-100"
            >
              Please provide us with a few details in the form below, and
              download.
            </motion.p>
          </div>
          <section className="page2-right w-full md:w-1/2 h-screen grid items-center">
            <form className="flex items-center justify-center flex-col">
              <input
                className="w-4/5 p-2 bg-transparent outline-none border-b focus:border-white border-[#afafaf] mb-10"
                type="text"
                name="firstname"
                placeholder="First Name"
                required
                onChange={handleInputValue}
                value={inputValue.firstname}
              />
              <input
                className="w-4/5 p-2 bg-transparent outline-none border-b focus:border-white border-[#afafaf] mb-10"
                type="text"
                name="lastname"
                placeholder="Last Name"
                onChange={handleInputValue}
                value={inputValue.lastname}
              />
              <input
                className="w-4/5 p-2 bg-transparent outline-none border-b focus:border-white border-[#afafaf] mb-10"
                type="phone"
                name="phonenumber"
                placeholder="Phone Number"
                required
                onChange={handleInputValue}
                value={inputValue.phonenumber}
              />
              <input
                className="w-4/5 p-2 bg-transparent outline-none border-b focus:border-white border-[#afafaf] mb-10"
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleInputValue}
                value={inputValue.email}
              />
              <br />
              <button className=" px-5 py-2 bg-cyan-400 border-2 border-cyan-500 hover:bg-transparent hover:text-white rounded-full text-black font-bold transition-all">
                Submit
              </button>
            </form>
          </section>
        </section>
      </div>
    </>
  );
};

export default Catalogue;
