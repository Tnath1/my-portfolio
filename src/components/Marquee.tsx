import myPicture from "../assets/me-b&w.jpg";

import React, { useEffect, useRef } from "react";

const Marquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

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

  return (
    // <div className="overflow-hidden whitespace-nowrap relative w-full">
    //   <div>
    //     <div
    //       ref={marqueeRef}
    //       className="inline-block font-bold text-9xl text-white"
    //       style={{ display: "inline-block" }} // Ensure text is in a single line
    //     >
    //       Arome Ukpoju - Arome Ukpoju - Arome Ukpoju - Arome Ukpoju - Arome
    //       Ukpoju - Arome Ukpoju - Arome Ukpoju - Arome Ukpoju - Arome Ukpoju -
    //       Arome Ukpoju - Arome Ukpoju - Arome Ukpoju - Arome Ukpoju - Arome
    //       Ukpoju
    //     </div>
    //     <img src={myPicture} alt="my picture" />
    //   </div>
    // </div>
    <div >
      <div className="flex justify-between mt-4 text-[16px] md:text-2xl ">
        <p>02/05</p>
        <p>ABOUT</p>
        <div className="flex gap-1">
          
          <div className="cursor-pointer">EMAIL </div>
          <span>/</span>
          <div className="cursor-pointer">LINDEDIN</div>
          <span>/</span>
          <div className="cursor-pointer">TWITTER</div>
          <span>/</span>
          <div className="cursor-pointer">INSTAGRAM</div>
        </div>
      </div>

      <div className="relative w-full  flex justify-center items-center overflow-hidden">
        {/* Container for centering and layout */}

        <div
          ref={marqueeRef}
          className="absolute font-bold uppercase text-9xl text-white whitespace-nowrap"
          style={{
            top: "6%", // Center text vertically
            transform: "translateY(-60%)", // Adjust the text slightly upwards over the image
            zIndex: 5, // Ensures text is below the image but still visible
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
            position: "relative", // Allows overlap with text
          }}
        />
      </div>
      <div className="flex flex-col justify-between mb-8 mt-8 flex-wrap gap-6 sm:flex-row mr-10 ml-10">
        <p className="uppercase text-[13px] md:text-[20px] sm:text-[18px]  ">
          <span className="ml-10"> hi there,</span> my name is Arome(Jonathan),
          I am a <br />
          solution-driven Software Enginer.
          <br /> I craft digital solutions with precision and creativity, <br />{" "}
          blending clean code with innovative design.
        </p>

        <p className="uppercase  flex justify-center items-center flex-col cursor-pointer rounded-full  w-20 h-20 p-[3rem] border border-white">
      
          learn <br /> more
        </p>
      </div>
    </div>
  );
};

export default Marquee;
