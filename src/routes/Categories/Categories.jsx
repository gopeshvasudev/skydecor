import React, {useRef, useEffect} from 'react'
import LocomotiveScroll from 'locomotive-scroll'

const Categories = () => {
  const locomotiveScrollRef = useRef(null);
  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll();
    return () => {
      locomotiveScrollRef.current.destroy();
    };
  }, []);

  return (
    <div>Categories</div>
  )
}

export default Categories