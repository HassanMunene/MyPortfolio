import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const ResumeSection = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="flex flex-col overflow-hidden" id="resume">
      <div className="flex items-center justify-center relative" ref={containerRef}>
        <div className="py-10 md:py-40 relative flex flex-col md:flex-row items-center justify-around resume-container">
          <motion.h1
            className="text-4xl font-semibold text-black dark:text-white flex flex-col w-full mr-10 resume-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Have a look at my <br />
            <span className="text-4xl md:text-[4rem] font-bold mt-1 text-[#0072ff] my-5 w-full leading-none resume-text">
              Awesome Resume
            </span>
            <a
              href="/Hassan_Munene_resume.pdf"
              download="Hassan_Munene_resume.pdf"
              target="_blank"
              className="rounded-xl border-2 border-white text-white text-[16px] py-1 px-5 my-3 text-center w-[200px] "
            >
              Download Resume
            </a>
          </motion.h1>
          <motion.img
            src='/Hassan_Munene_Resume.jpg'
            className="mt-5 me-5"
            alt="Hassan Munene Resume"
            width={isMobile ? 300 : 500}
            height={isMobile ? 200 : 400}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;