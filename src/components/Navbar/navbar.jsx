import './navbar.scss';
import LogoS from '../../assets/images/logo-s.svg';
import {Link, NavLink} from 'react-router-dom';
import { RiHome2Line } from "react-icons/ri";

import { FaRegUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import {useState} from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNavBar = () => {
        setShowNav((prevShowNav) => !prevShowNav);
    }
    return (
        <div className="nav-bar">
            <Link className="logo" to="/" onClick={() => setShowNav(false)}>
                <img src={LogoS} alt="logo"/>
            </Link>
            <nav className={showNav ? 'show' : ''}>
                <NavLink exact="true" to="/" activeclassname="active" onClick={() => setShowNav(false)}>
                    <div>Home</div>
                    <div className="nav-icon"><RiHome2Line/></div>
                </NavLink>
                <NavLink exact="true" to="/about" activeclassname="active" className="about-link" onClick={() => setShowNav(false)}>
                    <div>About</div>
                    <div className="nav-icon"><FaRegUser/></div>
                </NavLink>
                <NavLink exact="true" to="/contact-me" activeclassname="active" className="contact-link" onClick={() => setShowNav(false)}>
                    <div>Contact</div>
                    <div className="nav-icon"><FaEnvelope/></div>
                </NavLink>
                <NavLink exact="true" to="/skills" activeclassname="active" className="skills-link" onClick={() => setShowNav(false)}>
                    <div>Skills</div>
                    <div className="nav-icon"><GiSkills/></div>
                </NavLink>
                 <NavLink exact="true" to="/projects" activeclassname="active" className="projects-link" onClick={() => setShowNav(false)}>
                    <div>Projects</div>
                    <div className="nav-icon"><GrProjects/></div>
                </NavLink>
                <IoMdClose className="close-icon" onClick={() => setShowNav(false)}/>
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/hassan-munene-41290b237/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="anchor-icon"/>
                    </a>
                </li>
                <li>
                     <a href="https://github.com/HassanMunene" target="_blank" rel="noreferrer">
                         <FaGithub className="anchor-icon"/>
                     </a>
                </li>
                <li>
                     <a href="https://x.com/Awanzii">
                         <FaSquareXTwitter className="anchor-icon"/>
                     </a>
                </li>
            </ul>
            <HiOutlineMenuAlt3 onClick={toggleNavBar} className='mobile-link' />
        </div>
    )
 }
 
 export default Navbar;
