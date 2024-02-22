import { motion } from "framer-motion";
import React from "react";

const Homepage_sections = ({ item }) => {
  return (
    <section
      className={`w-full h-fit sm:h-screen flex flex-col sm:flex-row text-white sm:mb-[10vh] last:mb-0`}
    >
      <motion.section
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition:{duration:1.2}}}
        whileHover={{scale:1.02, transition:{duration:0.3, ease:"easeOut"}}}
        className="page2-left w-full h-1/2 sm:h-full p-5 sm:w-1/2"
      >
        <img
          src={item.imageUrl}
          alt="template-demo"
          className={`w-full h-full object-cover object-left rounded-[10px] scale-90`}
        />
      </motion.section>
      <section className="page2-right flex flex-col items-center justify-center w-full sm:w-1/2 h-1/2 sm:h-full gap-2 sm:gap-7 p-5">
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: .5}}
          className="text-2xl text-white text-center sm:text-4xl lg:text-5xl xl:text-6xl"
          dangerouslySetInnerHTML={{ __html: item.h1Text }}
        ></motion.h1>
        <h3 className="text-gray-400 text-lg text-center sm:text-xl sm:w-[80%] sm:leading-5 lg:text-2xl">
          {item.paraText}
        </h3>
        <div className="button-box flex flex-wrap items-center justify-center gap-10 sm:gap-24">
          {item.panelUrl ? <img src={item.panelUrl} alt="panel" /> : null}
          {item.button ? (
            <button className="py-3 px-8 bg-cyan-400 text-black rounded-full border-[2px] border-cyan-400 hover:bg-transparent hover:text-cyan-400 hover:font-bold hover:transition-colors mt-3 font-bold">
              {item.button}
            </button>
          ) : null}
        </div>
      </section>
    </section>
  );
};

export default Homepage_sections;
