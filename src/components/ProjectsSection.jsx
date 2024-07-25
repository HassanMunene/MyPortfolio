import react from 'react';
import hassan_blog from '../assets/images/hassan_blog.png';
import ProjectCard from './ui/ProjectCard';
import {motion} from 'framer-motion';

const projects = [
  {
    title: "Hassan's Blog",
    description: "This is a blog I have built to share my few cents with the rest of the world on different ranging from programming to life skills.",
    tags: ['Node.js','Express.js','React.js','Redux Toolkit','Tailwind Css'],
    image: hassan_blog,
    link: "https://hassan-blog-ldjl.onrender.com/",
  },
  {
    title: "Hassan's Blog",
    description: "This is a blog I have built to share my few cents with the rest of the world on different ranging from programming to life skills.",
    tags: ['Node.js','Express.js','React.js','Redux Toolkit','Tailwind Css'],
    image: hassan_blog,
    link: "https://hassan-blog-ldjl.onrender.com/",
  },
    {
    title: "Hassan's Blog",
    description: "This is a blog I have built to share my few cents with the rest of the world on different ranging from programming to life skills.",
    tags: ['Node.js','Express.js','React.js','Redux Toolkit','Tailwind Css'],
    image: hassan_blog,
    link: "https://hassan-blog-ldjl.onrender.com/",
  },
  {
    title: "Hassan's Blog",
    description: "This is a blog I have built to share my few cents with the rest of the world on different ranging from programming to life skills.",
    tags: ['Node.js','Express.js','React.js','Redux Toolkit','Tailwind Css'],
    image: hassan_blog,
    link: "https://hassan-blog-ldjl.onrender.com/",
  },
  {
    title: "Hassan's Blog",
    description: "This is a blog I have built to share my few cents with the rest of the world on different ranging from programming to life skills.",
    tags: ['Node.js','Express.js','React.js','Redux Toolkit','Tailwind Css'],
    image: hassan_blog,
    link: "https://hassan-blog-ldjl.onrender.com/",
  },
  {
    title: "Hassan's Blog",
    description: "This is a blog I have built to share my few cents with the rest of the world on different ranging from programming to life skills.",
    tags: ['Node.js','Express.js','React.js','Redux Toolkit','Tailwind Css'],
    image: hassan_blog,
    link: "https://hassan-blog-ldjl.onrender.com/",
  },
  {
    title: "Hassan's Blog",
    description: "This is a blog I have built to share my few cents with the rest of the world on different ranging from programming to life skills.",
    tags: ['Node.js','Express.js','React.js','Redux Toolkit','Tailwind Css'],
    image: hassan_blog,
    link: "https://hassan-blog-ldjl.onrender.com/",
  },
  {
    title: "Hassan's Blog",
    description: "This is a blog I have built to share my few cents with the rest of the world on different ranging from programming to life skills.",
    tags: ['Node.js','Express.js','React.js','Redux Toolkit','Tailwind Css'],
    image: hassan_blog,
    link: "https://hassan-blog-ldjl.onrender.com/",
  },
];


const ProjectsSection = () => {
  return (
    <div className=" mx-auto px-8 pt-10" id="projects">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white  leading-relaxed lg:leading-snug text-left mx-auto "
      >
        Explore my Projects
      </motion.h1>
      <ProjectCard projects={projects} />
    </div>
  );
}

export default ProjectsSection