import React from "react";
import {InfiniteMovingCards} from "./ui/InfiniteMovingCards";

const SkillsSection = () => {
  const skills = [
    { name: "React" },
    { name: "Next js" },
    { name: "Javascript" },
    { name: "GIT" },
    { name: "GitHub" },
    { name: "Html5" },
    { name: "CSS" },
    { name: "C++" },
    { name: "Tailwind" },
    { name: "Docker" },
    { name: "Bootstrap" },
  ];

  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mx-10 mb-10">
      <InfiniteMovingCards items={skills} direction="left" speed="slow" />
    </div>
  );
}

export default SkillsSection;
