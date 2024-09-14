import Contact from "../Contact";
import Hero from "../Hero";
import Marquee from "../Marquee";
import Projects from "../Projects";
import Skills from "../Skills";
import { useRef, RefObject } from "react";

const Home = () => {
  // const projectSectionRef = useRef<HTMLDivElement | null>(null);
  const projectSectionRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const marqueeSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToMarquee = () => {
    if (marqueeSectionRef.current) {
      marqueeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" text-neutral-300 antialiased selection:bg-blue-400 selection:text-blue-950 ">
      <div className="relative   bg-black-100 flex justify-center items-center overflow-hidden flex-col h-screen mx-auto sm:px-10 px-5">
        <div className=" max-w-7xl w-full ">
          <Hero scrollToSection={scrollToMarquee} />
        </div>
      </div>
      <div className="flixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="  px-8 bg-black">
        <hr className="border-t-4  border-dashed border-gray-400 " />
        <div ref={marqueeSectionRef}>
          <Marquee
            scrollToSection={() =>
              projectSectionRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>{" "}
        <hr className="border-t-4 border-dashed border-gray-400 " />
        <Skills />
        <Projects ref={projectSectionRef} />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
