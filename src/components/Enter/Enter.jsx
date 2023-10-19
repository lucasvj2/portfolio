import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Enter() {
  const [inViewRef, inView] = useInView({
    threshold: 0.1, // Adjust as needed, 0.1 means 10% of the element is visible
    triggerOnce: false, // Observe multiple times
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacityFactor = inView && !scrolled ? 1 : 0;

  return (
    <Link to="about" smooth={true} duration={3000} offset={-100}>
      <div style={{ opacity: opacityFactor }} ref={inViewRef} className='duration-1000'>
        <div
          className={`aspect-square p-1 w-30 rounded-full bg-opacity-50 bg-blue group hover:p-0 duration-300 hover:scale-110`}
        >
          <div className="rounded-full cursor-pointer bg-blue w-28 aspect-square flex items-center justify-center z-10">
            <h1 className="text-purple">Enter</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
