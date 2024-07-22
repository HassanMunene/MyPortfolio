"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Skills() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mx-10 mb-10">
      <InfiniteMovingCards items={skills} direction="left" speed="slow" />
    </div>
  );
}

const skills = [
  { name: "React" },
  {
    name: "React Hooks",
  },
  {
    name: "React Native",
  },
  {
    name: "Next js",
  },
  {
    name: "Javascript",
  },
  {
    name: "Typescript",
  },
  {
    name: "GIT",
  },
  {
    name: "GitHub",
  },
  {
    name: "Azure",
  },
  {
    name: "Html5",
  },
  {
    name: "CSS",
  },
  {
    name: "Software development",
  },
  {
    name: "C++",
  },
  {
    name: "Tailwind",
  },
  {
    name: "Docker",
  },
  {
    name: "Material ui",
  },
  {
    name: "Bootstrap",
  },
];
