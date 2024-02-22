import React, { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";
import ContactCard from "../../Components/ContactCard";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Contact = () => {
  const locomotiveScrollRef = useRef(null);
  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll();
    return () => {
      locomotiveScrollRef.current.destroy();
    };
  }, []);

  const contactCardInfo = [
    {
      icon: <LuPhoneCall size={"30px"} />,
      h1: "Telephone",
      details: "+34 678912345",
    },
    {
      icon: <MdOutlineMail size={"30px"} />,
      h1: "Email",
      details: "example@email.com",
    },
    {
      icon: <MdOutlineLocationOn size={"30px"} />,
      h1: "Head office",
      details: "123 High Street, London, SE1 1JZ, UK",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#000000] py-[60px] text-white">
      <div className="h-[50vh] w-full bg-[url(skydecor/extra/pattern.jpg)] bg-center mb-14 md:mb-20">
        <div className="w-full h-full backdrop-blur-[3px] grid place-items-center">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center text-5xl sm:text-7xl md:text-9xl text-zinc-100 mb-5 uppercase"
          >
            Contact Us
          </motion.h1>
        </div>
      </div>
      <h1 className="capitalize text-center text-4xl">
        skydecors laminates private limited
      </h1>
      <div className="contact-card-box w-full flex md:flex-row flex-col gap-10 justify-evenly items-center py-20">
        {contactCardInfo.map((card, index) => (
          <ContactCard key={index} info={card} />
        ))}
      </div>
      <section className="text-white w-full flex items-center">
        <form className="flex flex-col gap-5 m-auto p-5 w-full items-center">
          <h1 className="text-white text-2xl font-bold">Query</h1>
          <input
            className="bg-transparent border-[2px] w-full sm:w-[50vw] p-3 rounded-md outline-none font-bold"
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <input
            className="bg-transparent border-[2px] w-full sm:w-[50vw] p-3 rounded-md outline-none font-bold"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
          <input
            className="bg-transparent border-[2px] w-full sm:w-[50vw] p-3 rounded-md outline-none font-bold"
            type="text"
            name="companyname"
            placeholder="Company Name"
          />
          <input
            className="bg-transparent border-[2px] w-full sm:w-[50vw] p-3 rounded-md outline-none font-bold"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="bg-transparent border-[2px] w-full sm:w-[50vw] p-3 rounded-md outline-none font-bold"
            type="tel"
            name="phonenumber"
            placeholder="Phone Number"
          />
          <textarea
            className="bg-transparent border-[2px] w-full sm:w-[50vw] p-3 rounded-md outline-none font-bold"
            name="message"
            cols="20"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button className="py-4 px-6 border-2 border-cyan-500 rounded-sm hover:bg-cyan-500 hover:text-black font-bold transition-all text-cyan-400">Submit</button>
        </form>
      </section>
      <div className="w-full p-5 flex items-center justify-around mt-10">
        <h1 className="text-2xl font-bold text-cyan-600">Follow us</h1>
        <div className="flex gap-5">
        <FaFacebook size={"30px"} className="cursor-pointer hover:text-cyan-600 text-[#16554A]"/>
        <RiInstagramFill size={'30px'} className="cursor-pointer text-[#16554A] hover:text-cyan-600"/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
