import { motion } from "framer-motion";
const Marquee = (props) => {

  return (
    <div
      className="marquee overflow-hidden bg-[#16554a] text-white sm:pt-12 sm:pb-12"
    >
      <div className="inner-marquee flex whitespace-nowrap border-t-[2px] border-b-[2px] border-white">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          className="text-9xl sm:text-[20vw] pr-20 font-bold leading-none"
        >
          {props.text}
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          className="text-9xl sm:text-[20vw] pr-20 font-bold leading-none"
        >
          {props.text}
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
