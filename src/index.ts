// import project1 from "../assets/me-b&w3.jpg";
import project1 from "./assets/real-estate.png";
import project2 from "./assets/bg-ecom.png";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

type Project = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
};

type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
};

type Contact = {
  address: string;
  phoneNo: string;
  email: string;
};

export const HERO_CONTENT: string = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT: string = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES: Experience[] = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["JavaScript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Real-Estate App",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "express.js"],
    liveUrl: "https://plink-ui.vercel.app/",
    repoUrl: "https://github.com/Tnath1/plink-ui",
  },
  {
    title: "Ecommerce website",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Redux Toolkit"],
    liveUrl: "https://ecom-app-theta-lac.vercel.app/",
    repoUrl: "https://github.com/Tnath1/ecom-app",
  },
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    liveUrl: "https://example-taskapp.com",
    repoUrl: "https://github.com/Tnath1/plink-ui",
  },
  {
    title: "Blogging Platform",
    image: project1,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    liveUrl: "https://example-taskapp.com",
    repoUrl: "https://github.com/Tnath1/plink-ui",
  },
];

export const CONTACT: Contact = {
  address: " No 3, Independence Layout Enugu, Enugu State, Nigeria ",
  phoneNo: "+234 810 5063 244 ",
  email: "aromejonathanu@gmail.com",
};
