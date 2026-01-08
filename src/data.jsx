import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiExpress, SiNestjs, SiMongodb, SiPostgresql } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

import firstProjectImg from "../assets/first-project.png";

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Node.js, building scalable and high-performance server-side applications and RESTful APIs.",
  },
  {
    id: nanoid(),
    title: "Express.js",
    icon: <SiExpress className="h-16 w-16 text-emerald-500" />,
    text: "Experienced with Express.js, designing clean and maintainable REST APIs with middleware-based architecture.",
  },
  {
    id: nanoid(),
    title: "NestJS",
    icon: <SiNestjs className="h-16 w-16 text-emerald-500" />,
    text: "Strong knowledge of NestJS, applying modular architecture, dependency injection, and best practices for scalable backend systems.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in MongoDB, working with NoSQL databases to design flexible schemas and handle large-scale data efficiently.",
  },
  {
    id: nanoid(),
    title: "PostgreSQL",
    icon: <SiPostgresql className="h-16 w-16 text-emerald-500" />,
    text: "Experienced with PostgreSQL, designing relational databases, writing optimized queries, and ensuring data integrity.",
  },
  {
    id: nanoid(),
    title: "Docker",
    icon: <FaDocker className="h-16 w-16 text-emerald-500" />,
    text: "Experienced with Docker, containerizing applications to ensure consistent environments, simplified deployments, and scalable development workflows.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: firstProjectImg,
    url: "https://nodeapp.vanhuynh-soft-store.store/",
    github: "https://nodeapp.vanhuynh-soft-store.store/",
    title: "Software Store",
    text: "A web-based platform that allows users to purchase licensed software products online. After a successful payment, the system automatically delivers a unique license key to the customer via email.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "Bookaholic",
    text: "An online bookstore designed with a clean and minimalist user interface, focusing on usability and simplicity. Users can browse books, add items to their cart, manage cart contents, and complete purchases through an integrated checkout system.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: "A job tracking web application that helps users manage and organize job applications they have submitted. The system provides full CRUD (Create, Read, Update, Delete) functionality, allowing users to track job positions, companies, application status.",
  },
];
