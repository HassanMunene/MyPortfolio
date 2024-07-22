"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";

export function Projects() {
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
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Video Meet",
    description:
      "The Video Meet App is designed to offer high-quality video conferencing capabilities. Built with a modern tech stack, it ensures a smooth and responsive user experience. Dive into the features, technologies used, and explore the codebase.",
    tags:['Next js','React','React Hooks','Framer','Tailwind Css'],
    imageLink:'https://raw.githubusercontent.com/PallaviBobde/photo-resources/main/Screenshot%202024-06-25%20at%207.52.28%E2%80%AFPM.png',
    link: "https://video-meet-iota.vercel.app/",
  },
  {
    title: "YouTube Dada",
    description:
      "The YouTube Dada App is built to mimic the popular video streaming platform YouTube. It leverages Rapid API to fetch YouTube data and provides a sleek and responsive user interface. Explore the features, technologies used, and dive into the codebase.",
    tags:['React','React Router DOM','Axios','React Player','Material UI (MUI)','Emotion','React Scripts'],
    imageLink:'https://raw.githubusercontent.com/PallaviBobde/photo-resources/main/Screenshot%202024-06-25%20at%207.52.45%E2%80%AFPM.png',
    link: "https://youtube-dada.vercel.app/",
  },
  {
    title: "Awesome Portfolio",
    description:
      "This portfolio showcases my projects and skills, I am a passionate Front-End Developer with over 2+ years of experience specializing in React-based applications. Discover my work, get insights into my experience, and let's get in touch.",
    tags:['Next js','React','React Hooks','Framer','Tailwind Css'],
    imageLink:'https://raw.githubusercontent.com/PallaviBobde/photo-resources/main/Screenshot%202024-06-25%20at%207.52.15%E2%80%AFPM.png',
    link: "https://pallavibobde.com/",
  },
  {
    title: "Veberszone",
    description:
      "The objective of this project is to design and develop a professional, user-friendly website for a digital marketing agency. The website will serve as a platform to showcase the agency's services, case studies, client testimonials, and industry expertise.",
    tags:['Next js','React','React Hooks','Framer','Tailwind Css'],
    imageLink:'https://raw.githubusercontent.com/PallaviBobde/image-reosources/main/Screenshot%202024-06-25%20at%208.07.56%E2%80%AFPM.png',
    link: "https://veberszone.com/",
  },
  // {
  //   title: "Image Manipulator",
  //   description:
  //     "Image Manipulator is a versatile web application designed for users to upload, edit, and apply various effects to images. Whether you're enhancing photos, adding filters, or resizing images, this tool provides a simple yet powerful interface for image manipulation.",
  //   tags:['Javascript','Html','Css','Caman js'],
  //   imageLink:'https://raw.githubusercontent.com/PallaviBobde/photo-resources/main/Screenshot%202024-06-25%20at%207.47.38%E2%80%AFPM.png',
  //   link: "https://pallavibobde.github.io/img_manipulation/",
  // },
  {
    title: "Google Keep Clone",
    description:
      "Google Keep Clone is a sleek and responsive web application that allows users to create, edit, and organize notes and tasks just like in Google Keep. With an intuitive interface and robust features, it helps you stay organized and productive.",
    tags:['ReactJs','Javascript','Html','Css'],
    imageLink:'https://pallavibobde.github.io/myportfolio/Screenshot%20(81).png',
    link: "https://pallavibobde.github.io/google-keep-clone/",
  },
  {
    title: "CryptoTracker",
    description:
      "CryptoTracker is a sleek and responsive web application that provides users with the latest cryptocurrency prices, market trends, and detailed information on various cryptocurrencies. With an intuitive interface and robust features, it helps you stay informed about the crypto market.",
    tags:['React','Javascript','Html','Css'],
    imageLink:'https://raw.githubusercontent.com/PallaviBobde/photo-resources/main/Screenshot%202024-06-25%20at%207.52.02%E2%80%AFPM.png',
    link: "https://pallavibobde.github.io/crypto-app/",
  },
  {
    title: "Weather App",
    description:
      "Check weather using this website. It uses openweathermap api.",
    tags:['Javascript','Html','Css'],
    imageLink:'https://pallavibobde.github.io/myportfolio/Screenshot%20(69).png',
    link: "https://pallavibobde.github.io/weatherapp/",
  },
];
