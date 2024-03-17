import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Marquee from "../../Components/Marquee";

const About = () => {
  const locomotiveScrollRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll();
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
    return () => {
      locomotiveScrollRef.current.destroy();
      if (marqueeRef.current) {
        marqueeRef.current.stop();
      }
    };
  }, []);

  return (
    <>
      <section className="w-full min-h-screen bg-[#010101] text-white flex flex-col items-center py-[60px]">
        <div className="h-[50vh] w-full bg-[url(skydecor/extra/pattern.jpg)] bg-center mb-14">
          <div className="w-full h-full backdrop-blur-[3px] grid place-items-center">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="text-center text-5xl sm:text-7xl md:text-9xl text-zinc-100 mb-5"
            >
              ABOUT US
            </motion.h1>
          </div>
        </div>
        <p className="sm:text-justify text-center sm:text-lg text-md text-zinc-300 w-[76.8%] leading-7">
          Skydecor Laminates Pvt. Ltd. established in the year 2016, is the
          first manufacturer of PVC laminates in India. From a humble beginning
          of 32 designs, producing 2000 sheets per month for a year, we have
          augmented and diversified our range by leaps and bounds to more than
          500 designer laminates, while being the largest manufacturer with the
          capacity to produce 1.5 million sheets per annum. We started our
          journey as the first manufacturer of India by educating and creating
          awareness of PVC Laminates. Our commitment to deliver quality
          products, along with prompt services has earned us a pioneering name
          in the industry. Our manufacturing unit, based out of Greater Noida,
          Uttar Pradesh, has the potential to manufacture a wide range of
          elegant and one of a kind eco-friendly PVC laminates of different
          styles and textures, namely- metallic, laser, designer prints, high
          gloss, wood grain, soft touch/super matt, marble. Each of these give a
          very unique and polished look to the homes and offices they adorn. It
          is due to these factors that we are a very reputed brand in the
          decorative PVC market. We have gradually built our selves up to a
          brand that believes in perfection, and variety. This is evident
          through the number of unique designs and textures we launch every
          year, including the first ever launch of anti-bacterial and
          anti-scratch PVC laminates in the 20-21 catalogue. We provide our
          customers with the largest range in options, best quality material
          available in the market, with a huge sales network throughout the
          nation. We currently have three renowned brands of PVC Laminates in
          the market. Due to our nationwide sales network, a market savvy team,
          alongside dedicated channel partners in all major cities of India, our
          brand is set to grow manifolds and emerge as the largest manufacturer
          of PVC laminates in India. Our commitment to offer excellent quality
          and customer satisfaction remains steadfast.
        </p>
      </section>
      <Marquee ref={marqueeRef} text="OUR JOURNEY" />
      <section className="w-full bg-[#010101] overflow-scroll">
        <img
          src="skydecor/extra/journey.jpg"
          alt="journey"
          className=" invert object-cover"
        />
      </section>
    </>
  );
};

export default About;
