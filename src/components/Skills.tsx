import { DiSass } from "react-icons/di";
import { FaGit, FaNodeJs } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { LiaCss3Alt } from "react-icons/lia";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import "../app.css";
// import { motion, Variants } from "framer-motion";

// const iconVariants: Variants = {
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: 1, // Replace this with your desired duration
//       ease: "easeInOut",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// };

// // const Skills = () => {
//   return (
//     <div>
//       <div className="border-b mt-4 flex flex-col justify-center items-center  border-neutral-800 pb-24">
//         <h1 className="font-bold skills-h-size ">
//           STACK &lt; TOOLS / LANGUAGES / FRAMEWORKS / LIBRARIES &gt;
//         </h1>
//       </div>
//       <div className="flex flex-wrap max-w-[1300px] mx-auto items-center mb-[8rem] justify-center gap-4">
//         <motion.div
//           variants={iconVariants}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4  mt-8 border-neutral-800 p-4"
//         >
//           <RiReactjsLine className=" text-7xl text-cyan-400" />
//         </motion.div>
//         <div className="rounded-2xl border-4  mt-8 border-neutral-800 p-4">
//           <TbBrandNextjs className=" text-7xl text-white" />
//         </div>
//         <div className="rounded-2xl border-4  mt-8 border-neutral-800 p-4">
//           <SiTypescript className=" text-7xl text-white" />
//         </div>
//         <div className="rounded-2xl border-4  mt-8 border-neutral-800 p-4">
//           <TbBrandJavascript className=" text-7xl  text-yellow-300" />
//         </div>
//         <div className="rounded-2xl border-4  mt-8 border-neutral-800 p-4">
//           <DiSass className=" text-7xl text-cyan-400" />
//         </div>
//         <div className="rounded-2xl border-4  mt-8 border-neutral-800 p-4">
//           <SiTailwindcss className=" text-7xl text-teal-500" />
//         </div>
//         <div className="rounded-2xl border-4  mt-8 border-neutral-800 p-4">
//           <FaGit className=" text-7xl text-cyan-100" />
//         </div>
//         <div className="rounded-2xl border-4  mt-8 border-neutral-800 p-4">
//           <FaSquareGithub className=" text-7xl text-cyan-100" />
//         </div>
//         <div className="rounded-2xl border-4  mt-8 border-neutral-800 p-4">
//           <IoLogoHtml5 className=" text-7xl text-orange-500" />
//         </div>
//         <div className="rounded-2xl border-4  mt-8 border-neutral-800 p-4">
//           <LiaCss3Alt className=" text-7xl text-white" />
//         </div>

//         <div className="rounded-2xl border-4  mt-8 border-neutral-800 p-4">
//           <SiMongodb className=" text-7xl text-green-500" />
//         </div>
//         <div className="rounded-2xl border-4  mt-8 border-neutral-800 p-4">
//           <FaNodeJs className="  text-7xl text-green-500" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

// const Iconvariants = (duration) =>{
//   initial: {y: -10},
//   animate : {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: Infinity,
//       repeat: "linear",
//       repeatType: reverse
//     }
//   }
// }

import { motion, Variants } from "framer-motion";
// import {
//   RiReactjsLine,
//   TbBrandNextjs,
//   SiTypescript,
//   TbBrandJavascript,
//   DiSass,
//   SiTailwindcss,
//   FaGit,
//   FaSquareGithub,
//   IoLogoHtml5,
//   LiaCss3Alt,
//   SiMongodb,
//   FaNodeJs,
// } from "react-icons/all"; // Ensure correct import path for react-icons

const Skills = () => {
  // Function to create icon variants dynamically
  const createIconVariants = (duration: number): Variants => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div>
      <div className="border-b mt-4 flex flex-col justify-center items-center border-neutral-800 pb-24">
        <h1 className="font-bold skills-h-size">
          STACK &lt; TOOLS / LANGUAGES / FRAMEWORKS / LIBRARIES &gt;
        </h1>
      </div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap max-w-[1300px] mx-auto items-center mb-[8rem] justify-center gap-4"
      >
        {/* Using motion.div with different durations */}
        <motion.div
          variants={createIconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 mt-8 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={createIconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 mt-8 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={createIconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 mt-8 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={createIconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 mt-8 border-neutral-800 p-4"
        >
          <TbBrandJavascript className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={createIconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 mt-8 border-neutral-800 p-4"
        >
          <DiSass className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={createIconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 mt-8 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-teal-500" />
        </motion.div>
        <motion.div
          variants={createIconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 mt-8 border-neutral-800 p-4"
        >
          <FaGit className="text-7xl text-cyan-100" />
        </motion.div>
        <motion.div
          variants={createIconVariants(2.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 mt-8 border-neutral-800 p-4"
        >
          <FaSquareGithub className="text-7xl text-cyan-100" />
        </motion.div>
        <motion.div
          variants={createIconVariants(1.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 mt-8 border-neutral-800 p-4"
        >
          <IoLogoHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={createIconVariants(1.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 mt-8 border-neutral-800 p-4"
        >
          <LiaCss3Alt className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={createIconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 mt-8 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={createIconVariants(1.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 mt-8 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
