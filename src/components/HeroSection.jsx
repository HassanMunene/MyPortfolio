import react from 'react';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";
import HeaderSection from "./HeaderSection";

const HeroSection = () => {
  return (
    <div className="">
      <HeaderSection />
      <div className="relative h-[40rem] flex items-center justify-center bg-white dark:bg-black justify-center w-full group" id="home">
        <motion.h1 
          initial={{opacity: 0, y: 20,}}
          animate={{opacity: 1, y: [20, -5, 0],}}
          transition={{duration: 0.5, ease: [0.4, 0.0, 0.2, 1],}}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left mx-[1rem] ">
          <p className="mb-2 text-[1.5rem] fullnametext">Hi, I&apos;m Hassan Munene{" "}</p>
          <Highlight className="text-black dark:text-white px-5 text-[2rem]">Amazing Software Developer</Highlight>
          <p className="text-[1rem] font-normal my-5 para">
            Energetic developer, specializing in React, Nodejs and Next js
            applications, with over 1 year of professional experience in
            creating and optimizing web applications. Let&apos;s build something
            amazing together.
            <br />
          </p>
          <p className="text-[1rem] font-normal my-5 altpara">
            Specializing in React, Nodejs and Next js applications, with
            1+ year of professional experience.
            <br />
          </p>
          <div className="my-10 flex flex-row btn-container">
            <a
              href="#projects"
              className="rounded-xl bg-black border-2 dark:border-white border-white text-white text-[16px] py-3 px-5 mr-5 mb-5"
            >
              View My Projects
            </a>
            <a
              href="/Hassan_Munene_resume.pdf"
              download="Hassan_Munene_resume.pdf"
              target="_blank"
              className="rounded-xl bg-gradient-to-t from-[#330867] to-[#0072ff] dark:from-[#330867] dark:to-[#0072ff]  dark:border-[#0072ff] border-[#0072ff] text-white text-[16px] py-3 px-5 mb-5"
            >
              Download Resume
            </a>
          </div>
        </motion.h1>
      </div>
    </div>
  );
}

export default HeroSection;