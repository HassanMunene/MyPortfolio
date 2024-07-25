import react from 'react';
import HeaderSection from "../components/HeaderSection";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}

export default Home;
