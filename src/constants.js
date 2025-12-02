// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";

import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";


import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";

import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";


import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import thunderClient from "./assets/tech_logo/thunderClient.png";


// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import kpilogo from "./assets/education_logo/kpilogo.jpg";
import hsakhsLogo from "./assets/education_logo/hsakhsLogo.jpg";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import bookHaven from './assets/work_logo/bookHaben.png'
import toyTopia from './assets/work_logo/toyShop.png'
import dragonNews from './assets/work_logo/dragonNews.png'



export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
    
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      
    ],
  },
  {
    title: "Languages",
    skills: [
    
      { name: "JavaScript", logo: javascriptLogo },
      
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
     { name: "Thunder Client", logo: thunderClient },
      
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const education = [
  {
    id: 0,
    img: kpilogo,
    school: "Kishoreganj Polytechnic Institute, Kishoreganj",
    date: "jan 2024 - jan 2028",
    desc: "I am a dedicated Diploma in Computer student with a strong interest in modern technology, software development, and problem-solving. I enjoy learning new tools, building practical projects, and improving my skills step by step. My focus is on developing clean, responsive, and user-friendly applications while understanding the core fundamentals of programming and computer systems.I am continuously exploring new technologies, practicing real-world projects, and preparing myself for a future career in the tech industry. My goal is to grow as a skilled developer and contribute to meaningful digital solutions.",
    department: "Diploma In Computer Technology - CST",
  },
  {
    id: 1,
    img: hsakhsLogo,
    school: "Haji Sayed Ali Khan High School, Dhaka",
    date: "jan 2020 - sep 2022",
    gpa: "4.72",
    desc: "I completed my Secondary School Certificate (SSC) under the Business Studies department, where I developed a strong foundation in accounting, finance, business management, and economics. Studying Business Studies helped me build analytical thinking, decision-making abilities, and a clear understanding of how organizations operate.This background has strengthened my problem-solving skills and given me a practical perspective on business and technology, which I continue to apply in my learning and projects.",
    department: "Business Studies",
  },
  
];

export const projects = [
  {
    id: 0,
    title: "The Book Haven",
    description:
      "The Book Haven is a MERN Stack online bookstore with a clean UI, secure authentication, role-based access, and a fast, scalable backend for smooth book browsing, cart management, and purchasing.",
    image: bookHaven,
    tags: ["HTML", "CSS", "JavaScript", "React JS","Firebase", "Node.js",
      "MongoDB",
      "Express",],
    github:
      "https://github.com/Salman472/book-haven-client",
    webapp: "https://the-book-haven01.netlify.app/",
  },
  {
    id: 1,
    title: "Toy Topia",
    description:
      "Toy Topia is a React-based toy marketplace featuring a clean and responsive UI that allows users to browse toys, view details, and interact with an intuitive shopping experience. Built with reusable components and modern frontend practices, it delivers fast performance and a smooth user experience across all devices.",
    image: toyTopia,
    tags: [
      "React JS",
      "HTML",
      "CSS",
      "JavaScript",
      "API",
      "Firebase"
    ],
    github: "https://github.com/Salman472/toy-topia",
    webapp: "https://toy-topia01.netlify.app/",
  },
  {
    id: 2,
    title: "The Dragon News",
    description:
      "Dragon News is a React-based news platform that delivers real-time articles through a clean, modern, and responsive interface. Users can browse categories, read detailed news stories, and navigate smoothly thanks to optimized routing and reusable components. The project focuses on performance, readability, and a user-friendly experience across all devices.",
    image: dragonNews,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/Salman472/dragon-news-with-router",
    webapp: "https://dragon-news-auth-001.netlify.app/category/1",
  },
  
];
