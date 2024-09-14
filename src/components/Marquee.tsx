import { useEffect, useRef, useState } from "react";

interface MarqueProps {
  scrollToSection: () => void; // Scroll function passed as a prop
}

const Marquee: React.FC<MarqueProps>  = ({ scrollToSection }) => {
  const typingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState<string>("");
  const fullText: string = "  Arome Ukpoju";
  const typingSpeed: number = 150;

  // Intersection Observer to detect when the component is visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after visibility
        }
      });
    });

    if (typingRef.current) {
      observer.observe(typingRef.current); // Start observing the component
    }

    return () => {
      if (typingRef.current) {
        observer.unobserve(typingRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  // Typing effect logic, runs when the component is visible
  useEffect(() => {
    if (isVisible) {
      let currentIndex: number = -1;

      const typeText = () => {
        if (currentIndex <= fullText.length) {
          setDisplayedText((prev) => prev + fullText.charAt(currentIndex));
          currentIndex++; // Increment only after appending the current character
          setTimeout(typeText, typingSpeed);
        }
      };

      // Delay before starting the typing effect
      const typingDelay = setTimeout(() => {
        typeText(); // Start typing effect
      }, 1000);

      return () => clearTimeout(typingDelay);
    }
  }, [isVisible]); // Runs only when the component becomes visible

  return (
    <div className=" max-w-[1300px] mx-auto">
      <div
        ref={typingRef}
        className="hero-container mt-28  mb-20"
        data-reactid="9"
      >
        <h3 className=" font-light text-[1.3em] leading-[40px] ">
          Hi there!👋🏽 my name is
        </h3>
        <p className="hero-title text-grow before:content-['>']">
          {displayedText} <span className="caret-animation">&nbsp;</span>
        </p>
        <div
          className="hero-description  font-light text-[1.3em] leading-[40px]  my-8"
          data-reactid="13"
        ></div>
      </div>
      <div className="about-container">
        <div className="terminal">
          <div className="terminal-header h-[28px] bg-[#e4e3e5] rounded-t-[10px] flex justify-start items-center">
            <div
              className="header-button w-[12px] h-[12px] rounded-full ml-[9px] bg-[#f96256] border border-[#f65549]"
              data-reactid="23"
            ></div>
            <div className="header-button w-[12px] h-[12px] rounded-full ml-[9px] bg-[#fdbc3d] border border-[#ffb524]"></div>
            <div className="header-button  w-[12px] h-[12px] rounded-full ml-[9px] bg-[#33c948] border border-[#2dbb41]"></div>
          </div>
          <div className="terminal-window text-lg bg-[#5a5d7a] mb-28 rounded-b-[4px] shadow-[0_50px_100px_rgba(50,50,93,0.35),0_15px_35px_rgba(50,50,93,0.4),0_5px_15px_rgba(0,0,0,0.22)]">
            <div data-reactid="27">
              <div className="statement pt-6  mb-6 ml-9 mr-9 leading-6">
                <div className="input-statement text-white  relative before:content-['>']">
                  arome.about
                </div>
                <div className="return-statement text-[#e7d184]">
                  " I am a solution-driven Software Enginer. I craft digital
                  solution with precision and creativity, blending clean code
                  with innovative design. Check out my
                  <a 
                   onClick={scrollToSection}
                    className="text-[#35feff] pl-1"
                    href="#projects"
                    data-reactid="18"
                  >
                    side-projects
                  </a>
                  "
                </div>
              </div>
              <div className="statement  mb-6 ml-9 mr-9 leading-6">
                <div className="input-statement text-white  relative before:content-['>']">
                  arome.currentLocation
                </div>
                <div className="return-statement text-[#e7d184]">
                  "Enugu state, Nigeria"
                </div>
              </div>
              <div className=" mb-6 ml-9 mr-9 leading-6">
                <div className="input-statement  text-white relative before:content-['>']">
                  arome.contactInfo
                </div>
                <div className="return-statement text-[#e7d184] ">
                  ["
                  <a
                    className="text-[#35feff]"
                    href="mailto:aromejonathanu@gmail.com"
                  >
                    aromejonathanu@gmail.com
                  </a>
                  ", "
                  <a
                    className="text-[#35feff]"
                    rel="noopener"
                    target="_blank"
                    href="https://www.linkedin.com/in/arome-ukpoju-93b076253/"
                  >
                    LinkedIn
                  </a>
                  ", "
                  <a
                    className="text-[#35feff]"
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/Tnath1"
                  >
                    github
                  </a>
                  ", "
                  <a
                    className="text-[#35feff]"
                    target="_blank"
                    rel="noopener"
                    href="https://x.com/arome_nath"
                  >
                    twitter
                  </a>
                  "]
                </div>
              </div>
              <div className=" mb-6 ml-9 mr-9 leading-6">
                <div className="input-statement  text-white relative before:content-['>']">
                  arome.resume
                </div>
                <div className="return-statement">
                  "
                  <a
                    className="text-[#e7d184]"
                    rel="noopener"
                    href="/justinchi_resume.pdf"
                    target="_blank"
                  >
                    aromeu.pdf
                  </a>
                  "
                </div>
              </div>
              <div className=" mb-6 ml-9 mr-9 leading-6">
                <div className="input-statement  text-white relative before:content-['>']">
                  arome.interests
                </div>
                <div className="return-statement text-[#e7d184]">
                  ["Reading", "basketball", "cooking"]
                </div>
              </div>
              <div className=" mb-6 ml-9 mr-9 leading-6">
                <div className="input-statement  text-white relative before:content-['>']">
                  arome.education
                </div>
                <div className="return-statement text-[#e7d184]">
                  "B.Sc. Geology - Federal University Lokoja, Kogi State."
                </div>
              </div>

              <div className=" mb-6 ml-9 mr-9 leading-6">
                <div
                  className="input-statement  pb-8 relative before:content-['>']"
                  data-reactid="47"
                >
                  <span className="caret-animation  ">&nbsp;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
