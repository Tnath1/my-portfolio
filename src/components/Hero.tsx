import Navbar from "./Navbar";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div>
        
      <div className="pb-20 pt-36">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
  Backgrounds

</p> 
*/}
<Navbar/>

      <div className=" flex justify-center">
        <div className="  max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-yellow-100 max-w-80">
            Arome Ukpoju - Software Enginer
          </h2>
        </div>
      </div>
      <TextGenerateEffect
        className="text-center  text-[40px] md:text-5xl lg:text-6xl text-white"
        words="Transforming Concepts into Seemless Experiences"
      />
    </div>
  );
};

export default Hero;

{
  /* <div className="container mx-auto px-8">Hero</div> */
}
