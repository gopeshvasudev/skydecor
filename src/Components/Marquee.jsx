// import { motion } from "framer-motion";
// import React, { forwardRef, useEffect } from "react";

// const Marquee = forwardRef((props, ref) => {
//   return (
//     <>
//       <div
//         ref={ref}
//         className="marquee overflow-hidden bg-[#16554a] text-white sm:pt-12 sm:pb-12"
//       >
//         <div className="inner-marquee flex whitespace-nowrap border-t-[2px] border-b-[2px] border-white">
//           <motion.h1
//             initial={{ x: "0" }}
//             animate={{ x: "-100%" }}
//             transition={{
//               ease: "linear",
//               duration: 10,
//               repeat: Infinity,
//             }}
//             className="text-9xl sm:text-[20vw] pr-20 font-bold leading-none"
//           >
//             {props.text}
//           </motion.h1>
//           <motion.h1
//             initial={{ x: "0" }}
//             animate={{ x: "-100%" }}
//             transition={{
//               ease: "linear",
//               duration: 10,
//               repeat: Infinity,
//             }}
//             className="text-9xl sm:text-[20vw] pr-20 font-bold leading-none"
//           >
//             {props.text}
//           </motion.h1>
//         </div>
//       </div>
//     </>
//   );
// });

// export default Marquee;
import { motion } from "framer-motion";
import React, { forwardRef, useEffect, useRef } from "react";

const Marquee = forwardRef((props, ref) => {
  const marqueeContainerRef = useRef(null);
  let animationId = null;

  const startAnimation = () => {
    if (!marqueeContainerRef.current) return;
    const containerWidth = marqueeContainerRef.current.offsetWidth;
    const innerWidth = marqueeContainerRef.current.firstChild.offsetWidth;
    const duration = (innerWidth / containerWidth) * 10; // Adjust speed based on container and inner widths

    const animate = () => {
      marqueeContainerRef.current.firstChild.style.transform = `translateX(-100%)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();
  };

  const stopAnimation = () => {
    cancelAnimationFrame(animationId);
  };

  useEffect(() => {
    startAnimation(); // Start animation when component mounts

    return () => {
      stopAnimation(); // Stop animation when component unmounts
    };
  }, []);

  return (
    <div
      ref={marqueeContainerRef}
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
});

export default Marquee;
