import React from "react";
import {useRef, useState, useEffect} from 'react';
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const ResumeSection = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [])

  return (
    <div className="flex flex-col overflow-hidden" id="resume">
      <div className="flex items-center justify-center relative" ref={containerRef}>
        <div className="py-10 md:py-40  relative flex items-center justify-space-around resume-container">
            <h1 className="text-4xl font-semibold text-black dark:text-white flex flex-col w-full mr-10 resume-text">
              Have a look at my <br />
              <span className="text-4xl md:text-[4rem] font-bold mt-1 text-[#0072ff] my-5 w-full leading-none resume-text">
                Awesome Resume
              </span>
              <a
                href="./Pallavi-Bobde-Resume.pdf"
                download="Pallavi-Bobde-Resume.pdf"
                target="_blank"
                className="rounded-xl border-2  border-white text-white text-[16px] py-1 px-5 my-3 mr-10 text-center w-[200px] "
              >
                Download Resume
              </a>
            </h1>
            <img src='/Hassan_Munene_Resume.jpg' alt="Hassan Munene Resume" width={500} height={400}
            />
        </div>
      </div>
    </div>
  );
}

export default ResumeSection;
