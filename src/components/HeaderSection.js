"use client";
import "./styles.css";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";

export function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4 absolute top-0 right-0 left-0 navbar">
      {isOpen ? (
        <div className="container mx-auto flex justify-between h-[100vh] bg-[#111] bg-gray-900">
          <div className={`w-full lg:flex lg:w-auto block`}>
            <ul className="w-full h-full lg:flex lg:space-x-4 mt-4 lg:mt-0 text-white  flex flex-col items-center justify-center">
              <li>
                <a
                  href="/"
                  className="block px-2 py-1 hover:bg-gray-700 w-[120px] flex items-center justify-center  py-5"
                  onClick={toggleMenu}
                >
                  <AiFillHome className="mr-5"/>
                  Home
                </a>
              </li>
              
              <li>
                <a
                  href="#projects"
                  className="block px-2 py-1 hover:bg-gray-700 rounded flex items-center justify-center py-5"
                  onClick={toggleMenu}
                >
                  <GrProjects className="mr-5"/>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/PallaviBobde"
                  target="_blank"
                  className="block px-2 py-1 hover:bg-gray-700 rounded flex items-center justify-center py-5"
                  onClick={toggleMenu}
                >
                  <FaGithub className="mr-5"/>
                  Github 
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="block px-2 py-1 hover:bg-gray-700 rounded flex items-center justify-center py-5"
                  onClick={toggleMenu}
                >
                  <FaFile className="mr-5"/>
                  Resume
                </a>
              </li>
              
              <li>
                <a
                  href="#contact"
                  className="block px-2 py-1 hover:bg-gray-700 rounded flex items-center justify-center py-5"
                  onClick={toggleMenu}
                >
                  <RiContactsFill className="mr-5"/>
                  Contact me
                </a>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={"M6 18L18 6M6 6l12 12"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold gradient-text">Pallavi</div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={"M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
          <div className={`w-full lg:flex lg:w-auto hidden`}>
            <ul className="lg:flex lg:space-x-4 mt-4 lg:mt-0 text-white">
              <li>
                <a
                  href="/"
                  className="block px-2 py-1 hover:bg-gray-700 rounded"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block px-2 py-1 hover:bg-gray-700 rounded"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/PallaviBobde"
                  target="_blank"
                  className="block px-2 py-1 hover:bg-gray-700 rounded"
                >
                  Github 
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="block px-2 py-1 hover:bg-gray-700 rounded"
                >
                  Resume
                </a>
              </li>
              
              <li>
                <a
                  href="#contact"
                  className="block px-2 py-1 hover:bg-gray-700 rounded"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
