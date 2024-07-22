//get in touch
// Need an experienced senior full-stack developer to help out?

import { FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export function Contact() {
  return (
    <div
      className="py-8 px-4 sm:px-6 lg:px-8 py-40 bg-[#111]"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mr-20 mx-auto text-left flex flex-col justify-center align-center ">
          <h2 className="text-xl font-medium  sm:text-4xl contact-heading">
            Contact me Today!
          </h2>
          <p className="my-5 text-[14px] mb-10 ">
            Need an Experienced Frontend Specialist Developer to help out?
          </p>
          <p className="text-white flex align-center border-b  py-5 w-1/2 text-[14px] contact-text"><IoIosMail size={24} color="#0072ff"/><a href="mailto:pallavibobde1@gmail.com" className="ml-5 ">pallavibobde1@gmail.com</a></p>
          <p className="text-white flex align-center border-b  py-5 w-1/2 text-[14px] contact-text"><FaPhone  size={24} color="#0072ff" /> <a href="tel:+916263218624" className="ml-5 ">+916263218624</a></p>
          <p className="text-white flex align-center border-b py-5 w-1/2 text-[14px] contact-text"><FaLinkedinIn  size={24} color="#0072ff"/><a href="https://www.linkedin.com/in/pallavi-bobde-35ba721b2" className="ml-5 " target="_blank">https://www.linkedin.com/in/pallavi-bobde-35ba721b2</a></p>
          <p className="text-white flex align-center py-5 w-1/2 text-[14px] contact-text"><FaGithub  size={24} color="#0072ff" /> <a href="https://github.com/PallaviBobde" className="ml-5 " target="_blank">https://github.com/PallaviBobde</a></p>
          
        </div>
      </div>
    </div>
  );
}
