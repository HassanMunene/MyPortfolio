import ContactButton from "./ContactButton";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
export function Footer() {
  return (
    <div class="">
      {/* Copyright - pallavibobde1@gmail.com */}
      <div className="fixed bottom-0 right-0 h-[20]   z-30 px-1 py-10 ">
        <ContactButton
          
          link={"https://www.linkedin.com/in/pallavi-bobde-35ba721b2"}
          Icon={FaLinkedinIn}
        />
        <ContactButton
          link={"https://github.com/PallaviBobde"}
          Icon={FaGithub}
        />
        <ContactButton
          link={"mailto:pallavibobde1@gmail.com"}
          Icon={IoIosMail}
        />
      </div>
 </div>
  );
}
