import { IoIosArrowRoundForward } from "react-icons/io";
import { PROJECTS } from "./../index";
import { motion } from "framer-motion";

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
}

const Projects: React.FC = () => {
  return (
    <div className="border-t mt-4 border-neutral-800 pb-24">
      <div>
        <h1 className="my-20 text-center text-[1.5rem] uppercase lg:text-[3rem]">
          projects
        </h1>
      </div>
      <div className="uppercase max-w-[1200px] mx-auto">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="gen-h-size"
        >
          Here are some selected projects that demonstrate my dedication to
          creating impactful experiences and products.
        </motion.p>
        <div className="flex flex-col items-center  justify-center">
          {PROJECTS.map((project: Project, index: number) => (
            <div
              key={index}
              className="lg:mt-8 mt-12 flex gap-6 lg:gap-[6rem] flex-wrap lg:justify-"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={project.image}
                  className="h-[12rem] rounded-[10px] w-[30rem]"
                  alt={project.title}
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-100 max-w-xl lg:w-3/4 "
              >
                <h6 className="mb-2 font-semibold ">{project.title}</h6>
                <p className="mb-4 text-neutral-400 product-size">
                  {project.description}
                </p>
                {project.technologies.map((tech, index) => (
                  <span
                    className="rounded bg-neutral-900 mr-2 px-2 py-1 text-sm font-medium  text-yellow-100"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
                <div className="flex gap-10 mt-4 ">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center w-[8rem] items-center gap-2 border rounded-[20px] cursor-pointer p-2 text-black bg-white text-[15px]"
                  >
                    <button>View Project</button>
                    <IoIosArrowRoundForward />
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center w-[8rem] items-center gap-2 border rounded-[20px] p-2 cursor-pointer text-[15px]"
                  >
                    <button> View Code</button>
                    <IoIosArrowRoundForward />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
