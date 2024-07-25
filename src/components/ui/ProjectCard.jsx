import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js

const ProjectCard = ({ projects, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
      {projects.map((project, index) => (
        <Link
          to={project?.link}
          key={project?.link}
          target="_blank"
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-3xl bg-gradient-to-t from-[#330867] to-[#0072ff] dark:from-[#330867] dark:to-[#0072ff]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <div className="relative z-50">
              <div className="p-4">
                <h4 className="text-[20px] font-bold tracking-wide my-4">{project?.title}</h4>
                <img src={project.image} alt={project.title} width={500} height={200} className="rounded-xl border border-gray-600" />
                <div className="flex flex-wrap my-5">
                  {project?.tags.map((tag, index) => (
                    <p className="px-2 py-1 m-1 bg-gray-800 rounded-xl text-[14px]" key={index}>{tag}</p>
                  ))}
                </div>
                <p className="text-[14px] tracking-wide leading-relaxed mt-5">{project.description}</p>
                <button className="rounded-xl bg-gradient-to-t from-[#330867] to-[#0072ff] dark:from-[#330867] dark:to-[#0072ff] dark:border-[#0072ff] border-[#0072ff] text-white text-[16px] py-3 px-5 mt-5">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCard;