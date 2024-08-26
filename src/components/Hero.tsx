import Navbar from "./Navbar";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

interface ComponentAProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<ComponentAProps> = ({ sectionRef }) => {
  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="pb-20 pt-36">
        <Spotlight
          className="-top-40 -left-10   md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 " fill="purple" />
        <Spotlight className="top-28  " fill="blue" />
      </div>
      <div className="absolute  max-w-[1300px] top-0">
        <Navbar />

        <div className=" flex justify-center">
          <div className="   flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs   text-center text-yellow-100 max-w-80">
              Arome Ukpoju - Software Enginer
            </h2>
          </div>
        </div>
        <TextGenerateEffect
          className="text-center px-3 mb-[100px] text-[30px] md:text-5xl lg:text-[5rem] text-white"
          words="< Transforming Concepts and Ideas into Seamless Experiences. />"
        />

        <div className="flex justify-center items-center">
          <MdOutlineKeyboardDoubleArrowDown
            onClick={scrollToSection}
            className="  border-2 p-3 rounded-full mt-2 border-white flex-col w-[72px] h-[72px]  cursor-pointer"
          />
        </div>
        <h5 className=" mt-[5rem] ml-[2rem] text-2xl">01/05</h5>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="container mx-auto px-8">Hero</div> */
}
