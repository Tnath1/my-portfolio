import Navbar from "./Navbar";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import { BsArrowDownCircle } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = () => {
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

      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
  Backgrounds

</p> 
*/}
      <div className="absolute  max-w-[1300px] top-0">
        <Navbar />

        <div className=" flex justify-center">
          <div className="   flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest  text-center text-yellow-100 max-w-80">
              Arome Ukpoju - Software Enginer
            </h2>
          </div>
        </div>
        <TextGenerateEffect
          className="text-center mb-[100px] text-[40px] md:text-5xl lg:text-10xl text-white"
          words="< Transforming Concepts and Ideas into Seamless Experiences. />"
        />

        <div className="flex justify-center items-center">
          <MdOutlineKeyboardDoubleArrowDown className="  border-2 p-3 rounded-full mt-2 border-white flex-col w-[72px] h-[72px]  cursor-pointer" />
        </div>
        <h5 className="ml-2 mt-3 text-2xl">01/05</h5>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="container mx-auto px-8">Hero</div> */
}
