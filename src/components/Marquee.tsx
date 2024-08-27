import myPicture from "../assets/me-b&w.jpg";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import React, { useEffect, useRef, useState } from "react";

interface ComponentAProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const Marquee: React.FC<ComponentAProps> = ({ sectionRef }) => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (marquee) {
      let currentPosition = 0;

      const animateMarquee = () => {
        currentPosition -= 0.5;
        if (Math.abs(currentPosition) >= marquee.scrollWidth / 2) {
          currentPosition = 0;
        }
        marquee.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(animateMarquee);
      };

      animateMarquee();
    }
  }, []);

  
  const handleNavigation = (path: string) => {
    setLoading(true); 

    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false); 
      navigate(path); 
    }, 2000); 
  };

  if (loading) {
    return <Loading />; 
  }

  return (
    <div>
      <div className="flex justify-between mt-4 gen-h-size ">
        <p ref={sectionRef}>02/05</p>
        <p>ABOUT</p>
        <div className="flex gap-1">
          <div className="cursor-pointer">EMAIL </div>
          <span>/</span>
          <div className="cursor-pointer">LINDEDIN</div>
          <span>/</span>
          <div className="cursor-pointer">TWITTER</div>
          <span>/</span>
          <div className="cursor-pointer">GITHUB</div>
        </div>
      </div>

      <div className="relative w-full  flex justify-center items-center overflow-hidden">
        <div
          ref={marqueeRef}
          className="absolute font-bold uppercase text-9xl text-white whitespace-nowrap"
          style={{
            top: "6%",
            transform: "translateY(-60%)",
            zIndex: 5,
          }}
        >
          Arome Ukpoju - Arome Ukpoju - Arome Ukpoju - Arome Ukpoju - Arome
          Ukpoju - Arome Ukpoju - Arome Ukpoju - Arome Ukpoju - Arome Ukpoju -
          Arome Ukpoju - Arome Ukpoju - Arome Ukpoju - Arome Ukpoju - Arome
          Ukpoju - Arome Ukpoju
        </div>

        <img
          src={myPicture}
          alt="my picture"
          className="w-[30rem] h-[35rem] sm:w-[30rem] sm:h-[50rem] mt-[5rem] object-cover   rounded-[10px] z-0" // Adjust size and border radius
          style={{
            position: "relative",
          }}
        />
      </div>
      <div className="flex flex-col justify-between mb-8 mt-8 flex-wrap gap-6 sm:flex-row mr-10 ml-10">
        <p className="uppercase gen-h-size  ">
          <span className="ml-10"> hi there! 👋🏽,</span> my name is Arome, I am a
          <br />
          solution-driven Software Enginer. I craft digital <br /> solutions
          with precision and creativity, <br /> blending clean code with
          innovative design.
        </p>
        <p
          onClick={() => handleNavigation("/about")}
          className="uppercase lg:text-  flex justify-center items-center flex-col cursor-pointer rounded-full  w-20 h-20 p-[3rem] border border-white"
        >
          learn <br /> more
        </p>
      </div>
    </div>
  );
};

export default Marquee;
