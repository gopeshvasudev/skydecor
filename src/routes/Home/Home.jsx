import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect } from "react";
import Homepage_sections from "../../Components/Homepage_sections";
import Marquee from "../../Components/Marquee";
import { motion } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const locomotiveScrollRef = useRef(null);
  const marqueeRef = useRef(null);
  console.log(marqueeRef);

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

  const sectionData = [
    {
      id: 1,
      imageUrl: "skydecor/homepage/homepage1.png",
      h1Text: "Make your Home Creative & Unique.",
      paraText:
        "Boasting a legacy of a decade, Skydecor offers to revitalize the space around you. Whether it is your home or your workplace, we offer the best solutions in laminates for all types of surfaces that helps you infuse radiance, life and colors into your surroundings.",
    },
    {
      id: 2,
      imageUrl: "skydecor/homepage/homepage2.png",
      h1Text: "Who We Are",
      paraText:
        "Skydecor is the first & largest Company to manufacture all kinds of Laminates in India. We offer top-notch laminates with distinctive features like antibacterial, scratch-proof, impact-resistance, fire retardant, and more to gain a competitive edge above the rest.",
    },
    {
      id: 3,
      imageUrl: "skydecor/homepage/homepage3.png",
      h1Text: "PVC Laminates",
      paraText:
        "Sky decor PVC Laminates are a long - lasting decorative surface solution in residential and commercial interiors launched in 2016. Our PVC laminates are a one-of-a-Kind, eco-friendly solution to give you a polished and rich looks.",
      button: "Explore",
    },
    {
      id: 4,
      imageUrl: "skydecor/homepage/homepage4.jpg",
      h1Text: "Decorative Laminates",
      paraText:
        "We also bring you our Decorative Laminates to add a legacy of exceptional artistic quality and passion of excellence to your space .We offer unique and innovative products as per industry standards to offer an aesthetic appeal to your interiors.",
      button: "Explore",
    },
    {
      id: 5,
      imageUrl: "skydecor/homepage/homepage5.jpg",
      h1Text: "Acrylic Laminates",
      paraText:
        "Sky decor offers high-quality acrylic laminate sheets accessible in different colours .We use European technology with pure acrylic raw material to manufacture Acrylic laminates .It has batter weathering properties than other transparent plastics and is simpler to fabricate.",
      button: "Explore",
    },
    {
      id: 6,
      imageUrl: "skydecor/homepage/homepage6.jpg",
      h1Text: "Pre-Laminated Panels",
      panelUrl: "skydecor/panels/panel1.png",
      button: "Explore",
    },
  ];
  return (
    <>
      <section className="page1 w-full h-screen bg-[#040D12] relative overflow-hidden">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="skydecor/homepage/homepage-video.mp4" type="video/mp4" />
        </video>
        <div className="text-box backdrop-blur-[5px] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white/20">
          <motion.h1
            initial={{ y: "100%", rotate: "20deg", opacity: 0 }}
            animate={{ y: 0, rotate: "0deg", opacity: 1 }}
            transition={{ duration: 2, delay:.5, type:'spring'}}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-[#040D12]"
          >
            SKYDECOR
          </motion.h1>
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{duration:2, delay:.5, type:'spring'}}
            className="text-2xl font-semibold text-[#040D12]"
          >
            ELEGANT LAMINATES
          </motion.h2>
        </div>
      </section>
      <Marquee ref={marqueeRef} text="SKY DECOR" />
      <section className="bg-[#040D12]">
        {sectionData.map((item) => {
          return <Homepage_sections className='image-sections' item={item} key={item.id} />;
        })}
      </section>
    </>
  );
};

export default Home;
