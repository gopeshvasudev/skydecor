import React, {useRef, useEffect} from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { motion } from 'framer-motion';

const Event = () => {
  const locomotiveScrollRef = useRef(null);
  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll();
    return () => {
      locomotiveScrollRef.current.destroy();
    };
  }, []);
  
  return (
    <>
    <section className='w-full h-screen bg-[url(skydecor/panels/event.jpg)] bg-cover bg-no-repeat bg-'>
      <div className='overlay w-full h-full grid place-items-center backdrop-blur-sm bg-zinc-950/50'>
        <motion.h1 
        initial={{y:"100%", opacity:0}}
        animate={{y:"0%", opacity:1}}
        transition={{duration:1, ease:'easeOut'}}
        className='event-h1 text-[18vw] uppercase text-white font-bold text-center'>Events</motion.h1>
      </div>
    </section>
    </>
  )
}

export default Event