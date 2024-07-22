import react from 'react';
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import ResumeSection from "./components/ResumeSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <HeaderSection/>
      <HeroSection/>
      <Skills/>
      <Projects/>
      <ResumeSection/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;
