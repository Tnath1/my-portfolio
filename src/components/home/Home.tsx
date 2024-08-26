import Hero from "../Hero";
import Marquee from "../Marquee";
import Projects from "../Projects";
import Skills from "../Skills";
import { useRef } from "react";

const Home = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className=" text-neutral-300 antialiased selection:bg-blue-400 selection:text-blue-950 ">
      <div className="relative  bg-black-100 flex justify-center items-center overflow-hidden flex-col h-screen mx-auto sm:px-10 px-5">
        <div className=" max-w-7xl w-full ">
          <Hero sectionRef={sectionRef} />
        </div>
      </div>
      <div className="flixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="  px-8 bg-black">
        <hr className="border-t-4  border-dashed border-gray-400 " />

        {/* <Navbar /> */}
        <Marquee sectionRef={sectionRef} />
        <hr className="border-t-4 border-dashed border-gray-400 " />
        <Skills />
        {/* <hr className="border-t-4 border-dashed border-gray-400 " /> */}

        <Projects />
      </div>
    </div>
  );
};

export default Home;
