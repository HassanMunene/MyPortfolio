import ContactButton from "./ContactButton";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const FooterSection = () => {
  return (
    <div class="">
      <div className="fixed bottom-0 right-0 h-[20]   z-30 px-1 py-10 ">
        <ContactButton
          link={"https://www.linkedin.com/in/hassan-munene-41290b237/"}
          Icon={FaLinkedinIn}
        />
        <ContactButton
          link={"https://github.com/HassanMunene"}
          Icon={FaGithub}
        />
        <ContactButton
          link={"mailto:awanzihassan6@gmail.com"}
          Icon={IoIosMail}
        />
      </div>
    </div>
  );
}

export default FooterSection;